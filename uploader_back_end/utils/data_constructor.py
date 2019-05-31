from .db_helper import insert_data
import pandas as pd
from .custom_log import log_msg

"""
Builds the data
"""

def build_data_to_insert(file_path):
    """
    Builds the {keys, values} data to be inserted into the database
    :param file_path: Path of the file being uploaded
    :return: 1 or 0, 1 being success and 0 being failed
    """
    try:
        if file_path:
            data=pd.read_csv(file_path)
            res={}
            for row in data.iterrows():
                key, value =row[1].values[0], row[1].values[1]
                res[key]=value
            insert_data(res)
        return 1
    except Exception as e:
        log_msg("Error---build_data_to_insert"+str(e))
        return 0


