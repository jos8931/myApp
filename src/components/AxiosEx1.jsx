import React, { useEffect, useState } from 'react';
import axios from 'axios';
export default function AxiosEx1() {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {

        const fetchPost = async () => {
            try{
                setLoading(true);
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                setData(response.data);
            }catch (err){
                setError(err.message);
            }finally{
                setLoading(false);
            }
        }
        fetchPost();
    }, []);

    if(loading) return <p>데이터 불러오는 중...</p>
    if(error) return <p>에러: {error}</p>

    return (
        <div>
            <h1>Posts</h1>
            <ul>
                {data.map(post => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
        </div>
    );
}