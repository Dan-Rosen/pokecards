import React, { Component } from 'react'

import styles from './Pokecard.module.css'

const POKE_API = 'https://assets.pokemon.com/assets/cms2/img/pokedex/detail/'

let padToThree = (number) => (number <= 999 ? `00${number}`.slice(-3) : number)

class Pokecard extends Component {
    render() {
        let { id, name, type, exp } = this.props
        let imgSrc = `${POKE_API}${padToThree(id)}.png`

        return (
            <div className={styles.Pokecard}>
                <h1 className={styles.PokecardTitle}>{this.props.name}</h1>
                <div className={styles.PokecardImage}>
                    <img src={imgSrc} alt={name} />
                </div>
                <div className={styles.PokecardData}>Type: {type}</div>
                <div className={styles.PokecardData}>EXP: {exp}</div>
            </div>
        )
    }
}

export default Pokecard
