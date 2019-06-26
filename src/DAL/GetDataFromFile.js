import data from '../Data/data'
import GetDataBase from '../DAL/GetDataBase'

export default class GetDataFromFile 
extends GetDataBase
{
    

    GetSeller()
    {
        return data.Seller;
    }
}