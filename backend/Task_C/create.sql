-- Create the database if it doesn't exist
DO $$ 
BEGIN
    IF NOT EXISTS (SELECT 1 FROM pg_database WHERE datname = 'shoutoutsapp') THEN
        CREATE DATABASE shoutoutsapp;
    END IF;
END $$;

-- Connect to the database (no equivalent of USE in PostgreSQL)
\c shoutoutsapp

-- Create Users table
CREATE TABLE IF NOT EXISTS Users (
    UserID SERIAL PRIMARY KEY,
    UserType VARCHAR(20),
    Name VARCHAR(20) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255),
    Streak INT DEFAULT 0
);

-- Create Event table
CREATE TABLE IF NOT EXISTS Event (
    EventID SERIAL PRIMARY KEY,
    EventName VARCHAR(255),
    StartDate DATE,
    EndDate DATE,
    UserID INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE SET NULL
);

-- Create Feedback table
CREATE TABLE IF NOT EXISTS Feedback (
    FeedbackID SERIAL PRIMARY KEY,
    FeedbackMessage VARCHAR(255),
    UserID INT,
    Date DATE,
    Category VARCHAR(255),
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE SET NULL
);

-- Create Awards table
CREATE TABLE IF NOT EXISTS Awards (
    AwardID SERIAL PRIMARY KEY,
    AwardName VARCHAR(255),
    UserID INT,
    Date DATE,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE SET NULL
);

-- Create Shout-outs table
CREATE TABLE IF NOT EXISTS Shout_outs (
    SoID SERIAL PRIMARY KEY,
    Message VARCHAR(255),
    UserID INT,
    EventID INT,
    FOREIGN KEY (UserID) REFERENCES Users(UserID) ON DELETE CASCADE,
    FOREIGN KEY (EventID) REFERENCES Event(EventID) ON DELETE SET NULL
);
