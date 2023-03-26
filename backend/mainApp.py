import json
import openai
from llama_index import SimpleDirectoryReader, GPTSimpleVectorIndex

import os
os.environ["OPENAI_API_KEY"] = "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"

def generateText(group:str,topic:str): 
    openai.api_key = "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"
    prompt = "Generate a string of 300 word article with no special characters in topic of {}'s {}".format(group,topic)
    model = "text-davinci-002"
    
    response = openai.Completion.create(engine=model, prompt=prompt, max_tokens=4000)
    with open('backend/data/data.txt', 'w') as f:
        f.write(response.choices[0].text.replace("\n",""))
    return response.choices[0].text.replace("\n","")

def generateJSONQuiz(directory):
    documents = SimpleDirectoryReader(directory).load_data()
    index = GPTSimpleVectorIndex(documents)
    response = index.query("Please generate five multiple-choice questions based on the given article. Each question should be labeled with an index (e.g., Q1, Q2, Q3, Q4), and each question should have four possible answer options labeled A, B, C, and D. The questions and their first answer option should be separated by a question mark followed by an asterisk (e.g., Q1: What is the capital city of France?* A. London* B. Paris* C. Madrid* D. Berlin). After listing all four answer options for a question, separate them from the correct answer's index with an asterisk (e.g., Q1: What is the capital city of France?* A. London* B. Paris* C. Madrid* D. Berlin* B).")
    #text = '\nQ1: When was Dr. Martin Luther King Jr. born?* A. 1929* B. 1968* C. 1957* D. 1945* A).\n\nQ2: What is Dr. Martin Luther King Jr. best known for?* A. His activism* B. His role in the Civil Rights Movement* C. His powerful speeches* D. His writings* B).\n\nQ3: What type of protests did Dr. Martin Luther King Jr. advocate for?* A. Violent protests* B. Non-violent protests* C. Civil disobedience* D. All of the above* B).\n\nQ4: What is Dr. Martin Luther King Jr. remembered as?* A. One of the most important figures in American history* B. A Baptist minister* C. An activist* D. A leader in the Civil Rights Movement* A).\n\nQ5: When was Dr. Martin Luther King Jr. assassinated?* A. 1945* B. 1957* C. 1968* D. 1929* C).'
    questions = response.response.replace("\n","").split("Q")
    #questions = text.replace("\n","").split("Q")
    result = []
    #Get questions into JSON object 
    for q in questions[1:]:
        qa = q.split("*")
        questionJSON =  {
            "question":qa[0],
            "options":qa[1:5],
            "key":qa[5]
        }
        #response_json = json.loads(questionJSON)
        result.append(questionJSON)
    
    return result

    

if __name__ == '__main__':
    generateText("Black","Martin Luther King")
    # documents = SimpleDirectoryReader('data').load_data()
    # #text = "When most Americans think of the Civil Rights Movement, they have in mind a span of time beginning with the 1954 Supreme Court’s decision in Brown v. Board of Education, which illegalized de jure segregation in public education, or the 1955 Montgomery Bus Boycott, and ending with the 1968 assassination of Martin Luther King, Jr. And while the Civil Rights Movement did indeed achieve these landmark legal and political changes, there were other important goals as well. African Americans also sought an end to the systemic discrimination that had limited their access to decent housing, jobs, and health care. They also wanted to be able to participate fully in the American economy and political system.And so the struggle for civil rights was, from the start, as much about economic justice as it was about race. Indeed, Dr. King himself always insisted that the movement he helped lead was not just about desegregation but “the total liberation of the Negro.” He saw the struggle for racial equality as inextricably linked to the fight for economic justice. This is why, in his famous “I Have a Dream” speech, he spoke of freedom not just as the ability to vote or to go to school without being segregated, but also as the ability to find a decent job and earn a livable wage.The connection between civil rights and economic justice has always been central to the African American experience. But it has become even more so in recent years, as the effects of deindustrialization, globalization, and the dismantling of the welfare state have been felt more acutely in black communities. Today, the median wealth of white households is nearly thirteen times that of black households, and the unemployment rate for blacks is nearly double that of whites. Nearly one in three black men can expect to go to prison at some point in their lives.The civil rights struggle of the 1950s and 1960s was about overcoming legal segregation and winning formal equality under the law. But the fight for economic justice is just as important today. And in many ways, it is even more difficult. We have come a long way since the days of Jim Crow, but the dream of economic justice for all remains unfinished."
    # index = GPTSimpleVectorIndex(documents)
    # response = index.query("Please generate five multiple-choice questions based on the given article. Each question should be labeled with an index (e.g., Q1, Q2, Q3, Q4), and each question should have four possible answer options labeled A, B, C, and D. The questions and their first answer option should be separated by a question mark followed by an asterisk (e.g., Q1: What is the capital city of France?* A. London* B. Paris* C. Madrid* D. Berlin). After listing all four answer options for a question, separate them from the correct answer's index with an asterisk (e.g., Q1: What is the capital city of France?* A. London* B. Paris* C. Madrid* D. Berlin* B).")
    # print(type(response))
    # print(response)
    generateJSONQuiz("data")