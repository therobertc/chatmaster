import mysql.connector
import scraper 
import sys 
from twython import Twython, TwythonStreamer, TwythonError

import time
import random
import os

stock = "$SQ"
# stock = scraper.sorted_data()
# print(f"Stocks found are {stock}")
user_input = input("Do you want to start streaming for tweets?: (Press enter for Yes, N for no ) ").lower()
if user_input != "":
    sys.exit()
else:
    print("Streaming for live tweets and saving to db...")


def save_to_db(tweet, handle):

    mydb = mysql.connector.connect(
            host="localhost",
            user="root",
            passwd="",
            database="chartbot_db",
            )
    mycursor = mydb.cursor()
    sql = "INSERT INTO tweets (tweet_text, handle) VALUES (%s, %s)"
    val = (tweet, handle)
    mycursor.execute(sql, val)
    mydb.commit()
    # mycursor.execute(f"SELECT * FROM tweets WHERE tweet_text LIKE '%{}%'")

APP_KEY = "D21Q718kjG6mG6lbNnhDSeoC2"
APP_SECRET = "88Lvh7MT5TSsXoi1XVpgJGGR5MO4BsLud1vpr4PGrtXxXj68Rh"
OAUTH_TOKEN = "1102317081943371776-xYcyrwsvWbFeSDWo5itFVJ7F7UcwaE"
OAUTH_TOKEN_SECRET = "O0G187R8eZ4ehu2Pm5SwDFX29C06ZRRvZjHxTvaZw0RTZ"


def twitter_api():
    # Authenticate credentials

    # Replace the placeholder below with your credentials
    twitter = Twython(APP_KEY, APP_SECRET, OAUTH_TOKEN, OAUTH_TOKEN_SECRET)
    return twitter


def process(data):
    # api = twitter_api()
    handle = data.get('user').get('screen_name').lower()
    # tweet_id = data.get('id')
    tweet = data.get("text")
    if tweet[0] != "@" and "RT" not in tweet and tweet.count("#") <= 3:
        print(tweet)
        save_to_db(tweet, handle)
        print("Tweet saved!")
    else:
        print("This tweet", data.get("text"), "is a reply")
    # print(tweet_data["user"].get("followers_count"))

class MyStreamer(TwythonStreamer):
    def on_success(self, data):
         
        tweetId = data.get('id') 
        # screenName = data.get('user').get('screen_name') 
        tweetText = data.get('text') 
        # chatResponse = chatbot.respond(tweetText)
        print(tweetText)
        process(data)
        # print(screenName)

    def on_error(self, status_code, data):
        print("Twitter Error Status code", status_code)

        # self.disconnect()

stream = MyStreamer(APP_KEY, APP_SECRET,
                    OAUTH_TOKEN, OAUTH_TOKEN_SECRET)

stream.statuses.filter(track = stock)