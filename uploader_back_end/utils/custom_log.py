
"""
Message Logger
"""

from ..config.default import DEBUG
def log_msg(msg):
    """
    Prints the custom print statements if the app is in debug mode
    :param msg:
    :return:
    """
    if DEBUG:
        print(msg)