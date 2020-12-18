import spacy 
import resquest
from flask import Flask, render_template, request, redirect, flash, send_from_directory, jsonify

@app.route('/')
def entityfinder():


nlp = spacy.load('en_core_web_sm') 

sentence = "apple is looking at buying U.K. startup for $1 billion"//

response = requests.get(url, data={payload: sentence})


doc = nlp(sentence) 

for ent in doc.ents: 

    jsonify(ent.text, ent.start_char, ent.end_char, ent.label_)  /// not completed
  

if __name__ == "__main__":
    app.run(host='127.0.0.1', port=3000, debug=True)
