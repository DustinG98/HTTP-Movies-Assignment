import React, { useEffect, useState } from 'react'
import axios from 'axios'
import {useHistory} from 'react-router-dom'

const UpdateMovie = (props) => {
    const { id } = props.match.params;
    const history = useHistory();
    const [movie, setMovie] = useState({
        title: "",
        director: "",
        metascore: ""
    })
    useEffect(() => {
        axios.get(`http://localhost:5000/api/movies/${id}`)
            .then(res => setMovie(res.data))
            .catch(err => console.log(err))
    }, [id])

    const handleChanges = e => {
        setMovie({ ...movie, [e.target.name]: e.target.value })
    }

    const handleSubmit = e => {
        e.preventDefault();
        axios.put(`http://localhost:5000/api/movies/${id}`, movie)
            .then(() => {
                setMovie({
                    title: "",
                    director: "",
                    metascore: ""
                })
                history.push('/')
            })
            .catch(res => console.log(res))
    }
    return (
        <div>
            <form onSubmit={e => handleSubmit(e)}>
                <input name="title" value={movie.title} onChange={e => handleChanges(e)}/>
                <input name="director" value={movie.director} onChange={e => handleChanges(e)}/>
                <input type="number" name="metascore" value={movie.metascore} onChange={e => handleChanges(e)}/>
                <button>Update Movie</button>
            </form>
        </div>
    )
}

export default UpdateMovie