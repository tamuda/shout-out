-- Insert sample data into Users with more unique passwords
INSERT INTO Users (UserType, Name, Email, Password, Streak) VALUES
('General', 'Rylan Enderby', 'rylan.enderby@example.com', 'rye123', 3),
('General', 'Bre Bai', 'bre.bai@example.com', 'bre104', 0),
('General', 'Charlington Coulange', 'charlington.coulange@example.com', 'cha987', 0),
('General', 'Paul Mims', 'paul.mims@example.com', 'pau111', 2),
('General', 'Noah Huges', 'noah.huges@example.com', 'noa102', 0),
('Admin', 'Aaron Smith', 'aaron.smith@example.com', 'aar001', 4),
('General', 'Sam Toumi', 'sam.toumi@example.com', 'sam888', 0),
('Admin', 'Reis Pierotti', 'reis.pierotti@example.com', 'rei777', 0),
('General', 'Kevin Hart', 'kevin.hart@example.com', 'kev202', 3),
('General', 'John Cena', 'john.cena@example.com', 'joh023', 7),
('General', 'Ela French', 'ela.french@example.com', 'ela405', 0),
('General', 'Laura Smith', 'laura.smith@example.com', 'lau201', 1),
('General', 'Michael Scott', 'michael.scott@example.com', 'mic004', 0),
('General', 'Nina Scott', 'nina.scott@example.com', 'nin098', 2),
('Admin', 'Eddy Gordo', 'eddy.gordo@example.com', 'edd505', 0),
('General', 'Bryan Smith', 'bryan.smith@example.com', 'bry303', 1),
('General', 'Quentin Black', 'quentin.black@example.com', 'que676', 2),
('General', 'Tim Turner', 'tim.turner@example.com', 'tim909', 0),
('General', 'Steve Fox', 'steve.fox@example.com', 'ste808', 6),
('General', 'Tina Pam', 'tina.pam@example.com', 'tin707', 1);

-- Insert sample data into Event
INSERT INTO Event (EventName, StartDate, EndDate, UserID) VALUES
('Mother Appreciation Day', '2024-04-10', '2024-04-11', 1),
('Supporting Those in Need', '2024-04-12', '2024-04-16', 2),
('Public Service Appreciation', '2024-04-14', '2024-04-15', 3);

-- Insert sample data into Feedback
INSERT INTO Feedback (FeedbackMessage, UserID, Date, Category) VALUES
('I think it would be great to have a referral system', 1, '2024-04-10', 'Website'),
('Loved the event but I was not sure where to park', 2, '2024-04-16', 'Event'),
('I believe there should be more awards', 8, '2024-04-12', 'Website');

-- Insert sample data into Awards
INSERT INTO Awards (AwardName, UserID, Date) VALUES
('Pillar of the Community', 4, '2024-04-10'),
('Encouraging Team member', 5, '2024-04-11'),
('Leader', 6, '2024-04-12');

-- Insert sample data into Shout_outs
INSERT INTO Shout_outs (Message, UserID, EventID) VALUES
('I really appreciate my mom cooking for me everyday', 1, 1),
('Thank you to Paul who went out of his way to make sandwiches to those in need', 2, 2),
('Garbagemen and women are great', 1, 3),
('I love my roommate Tim', 3, NULL);
