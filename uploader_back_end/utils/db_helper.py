from sqlalchemy import create_engine
from sqlalchemy import Column, String, Integer
from sqlalchemy.orm import sessionmaker
from sqlalchemy.ext.declarative import declarative_base
from ..config.default import DB_HOST
engine = create_engine(DB_HOST, echo = False)
Base = declarative_base()
Session= sessionmaker(bind=engine)

"""
Deals with DB specifics operations
"""
class TagInfo(Base):
    __tablename__='taginfo'
    id = Column(Integer, primary_key=True)
    key = Column(String)
    value = Column(String)


Base.metadata.create_all(engine)

def insert_data(records):
    """
    Inserts all the field values as bulk insert
    :param records: {keys, values}
    :return: 1 and 0, 1 for success and 0 for failure
    """
    session = Session()
    try:
        result=[]
        for key, value in records.items():
            info = TagInfo(key=key, value=value)
            result.append(info)
        session.add_all(result)
        session.commit()
        return 1
    except Exception as e:
        session.rollback()
        return 0


def select_result(key):
    """
    Fetches data based on the given key
    :param key:
    :return: list of values
    """
    session = Session()
    resultset=session.query(TagInfo.value).filter(TagInfo.key.ilike(key)).all()
    return [value for (value,) in resultset]


