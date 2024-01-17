import { useState } from "react";
import InputMask from 'react-input-mask';

import useForm from "../../../shared/hooks/useForm";

import initialState from "./initialState";

import styles from "./my-books-form.module.scss";

const MyMoviesForm = ({ onSubmit }) => {
    const { state, handleChange, reset } = useForm({ initialState, onSubmit });

    const handleSubmit = e => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.set("favorite", state.favorite);
        onSubmit(formData);
        reset();
    }

    const { title, director, favorite, releaseDate } = state;
    
    return (
        <form onSubmit={handleSubmit} className={styles.form} encType="multipart/form-data">
            <div className={styles.formGroup}>
                <label>Movie title</label>
                <input value={title} name="title" onChange={handleChange} className={styles.textField} placeholder="Movie title" required />
            </div>
            <div className={styles.formGroup}>
                <label>Movie director</label>
                <input value={director} name="director" onChange={handleChange} className={styles.textField} placeholder="Movie director" required />
            </div>
            <div className={styles.formGroup}>
                <label>Favorite</label>
                <input checked={favorite} name="favorite" onChange={handleChange} className={styles.checkbox} type="checkbox" />
            </div>
            <div className={styles.formGroup}>
                <label>Movie genre</label>
                <select name="genre" onChange={handleChange}>
                    <option value="fantastic">Fantastic</option>
                    <option value="love story">Love story</option>
                </select>
            </div>
            <div className={styles.formGroup}>
                <label>Movie release date</label>
                <InputMask value={releaseDate} name="releaseDate" mask="9999" onChange={handleChange} className={styles.textField} placeholder="Book date" required />
            </div>
            <div className={styles.formGroup}>
                <label>Poster</label>
                <input name="poster" type="file" />
            </div>
            <button type="submit">Add movie</button>
        </form>
    )
}

export default MyMoviesForm;

