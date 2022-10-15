from flask import Flask, render_template, request
import sqlite3 as sql

app=Flask(__name__)

@app.route('/')

def home():
    return render_template('index.html')

@app.route('/club_reg')
def new_club():
    return render_template('add_club.html')


@app.route('/addrec_club',methods=['POST','GET'])
def addrec_club():
    if request.method=='POST':
        try:
            cn=request.form['cn']
            cate = request.form['cate']
            # cate1=request.form['science']
            # cate2 = request.form['health']
            # cate3 = request.form['sport']
            # cate4 = request.form['math']
            # cate5 = request.form['physic']

            nm=request.form['nm']
            em=request.form['em']
            num=request.form['num']
            
            with sql.connect('database.db') as con:
                cur = con.cursor()
                
                
                cur.execute("INSERT INTO club_reg (Clubname,Categories,n_member,email,number)VALUES(?,?,?,?,?)",(cn,cate,nm,em,num))
                
                con.commit()
                
                msg="Record successfully added"
        except:
            con.rollback()
            msg="error in inserting"
            
        finally:
            return render_template("result.html",msg=msg)
            con.close()
            
            
@app.route('/list_club')
def list():
    con=sql.connect("database.db")
    con.row_factory=sql.Row
    cur=con.cursor()
    cur.execute("select * from Club_reg")
    
    #not sure about this fetch thing
    rows = cur.fetchall();
    
    return render_template("list.html",rows=rows)


@app.route('/submission', methods=['POST', 'GET'])
def user_cate():
    if request.method == 'POST':
        try:
            # I have no fucking clue of how to add box and match them, currently I will make
            # a limit number of category that user can filter with
            ocn=request.form['cn']
            tcn=request.form['cn']
            scn=request.form['cn']
            fcn=request.form['cn']
            hcn=request.form['cn']
            with sql.connect('database.db') as con:
                cur = con.cursor()

                cur.execute("SELECT * FROM club_reg WHERE Cateories = VALUES(? OR ? OR ? OR ? OR ?)",(ocn,tcn,scn,fcn,hcn))


                msg = "Record successfully added"
        except:
            con.rollback()
            msg = "error in searching"

        finally:
            return render_template("result.html", msg=msg)
            con.close()


@app.route('/filter')
def filter():

if __name__ == '__main__':
    app.run(debug=True)

# #data creation
# conn = sqlite3.connect('database.db')
# print ("Opened database successfully")

# #club_reg
# conn.execute('CREATE TABLE club_reg (Clubname TEXT, Categories TEXT, n_member TEXT, email TEXT, number TEXT)')
# print ("Club_reg Table created successfully")

# #event
# conn.execute('CREATE TABLE add_event (Clubname TEXT, Event_name TEXT, location TEXT, time TEXT, descrip TEXT, culture TEXT, price TEXT)')
# print ("Event Table created successfully")


