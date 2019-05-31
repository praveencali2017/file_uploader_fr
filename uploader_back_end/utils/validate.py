FILE_TYPE='csv'

"""
Validate Module
"""


def check_file(filename):
    """
    Checks whether given filename is supported
    :param filename: filename (*.csv, *.pdf etc)
    :return: True or False
    """
    return filename.rsplit(".",1)[1].lower()==FILE_TYPE