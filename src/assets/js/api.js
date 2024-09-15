import axios from 'axios'

export async function GetBook(subject, limit){
    try{
        const response = await axios.get(`https://openlibrary.org/subjects/${subject}.json?limit=${limit}`);
        const subjectData = response.data;
        return subjectData;
    }
    catch(error){
        console.error('There is an error: ', error)
    }
};

export async function GetBookDetails(bookKey){
    try{
        const response1 = await axios.get(`https://openlibrary.org${bookKey}.json`);
        const detailsData = response1.data;
        return detailsData;
    }
    catch(e){
        console.error('There is an error: ', e)
    }
}

export async function GetBookRatings(ratingsKey){
    try{
        const response2 = await axios.get(`https://openlibrary.org${ratingsKey}/ratings.json`);
        const ratingsKeyData = response2.data;
        return ratingsKeyData;
    }
    catch(e){
        console.error('There is an error: ', e)
    }
}