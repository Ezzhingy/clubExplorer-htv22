import sqlite3

#data creation
conn = sqlite3.connect('test-database.db')
print ("Opened database successfully")

#club_reg
conn.execute('CREATE TABLE club_reg (Clubname TEXT, Cate1 INTEGER,Cate2 INTEGER,Cate3 INTEGER,Cate4 INTEGER,Cate5 INTEGER, n_member TEXT, email TEXT, number TEXT)')
print ("Club_reg Table created successfully")

#event
conn.execute('CREATE TABLE add_event (Clubname TEXT, Event_name TEXT, location TEXT, time TEXT, descrip TEXT, culture TEXT, price TEXT)')
print ("Event Table created successfully")