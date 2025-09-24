from fastapi import FastAPI
import psycopg2
import os

app = FastAPI()

def get_connection():
    return psycopg2.connect(
        host="dpg-d36ihvadbo4c73drlcng-a.frankfurt-postgres.render.com",
        database="tripulacionchallenge",
        user="tripulacionchallenge_user",
        password="XX",
        port=5432
    )

@app.get("/ataques-por-tipo")
def ataques_por_tipo():
    conn = get_connection()
    cur = conn.cursor()
    cur.execute("""
        SELECT tipo_ataque, COUNT(*) 
        FROM ataques
        GROUP BY tipo_ataque;
    """)
    results = cur.fetchall()
    cur.close()
    conn.close()
    
    return [{"name": r[0], "value": r[1]} for r in results]
