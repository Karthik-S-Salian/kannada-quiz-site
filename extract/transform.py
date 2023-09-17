import pandas as pd
import json

def jsonify_data(data_path,store_path):
    df = pd.read_excel(data_path)
    df.columns = ["index","question","option1","option2","option3","option4"]
    df.dropna(inplace=True)

    final_d=[]
    for _,row in df.iterrows():
        final_d.append({
            'question':row['question'],
            'options':[row['option1'],
                    row['option2'],
                    row['option3'],
                    row['option4']
            ]
        })

    with open(store_path,"w") as fh:
        json.dump(final_d,fh,indent=4)

jsonify_data("./input/Balake kannada-Lesson 1-7(1 -230) (2).xlsx","./output/balake_kannada_mse_1.json")
jsonify_data("./input/Samskrithika Kannada12(1 to 200) (2).xlsx","./output/samskruthika_kannada_mse_1.json")
jsonify_data("./input/BaLake  kannada -Lesson 8-18 ( 231-520) (1).xls","./output/balake_kannada_mse_2.json")
jsonify_data("./input/Samskruthika Kannada 3-5(201 to 455) (2).xlsx","./output/samskruthika_kannada_mse_2.json")