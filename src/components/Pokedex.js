import React, { Component } from 'react'

import Pokecard from './Pokecard'

import styles from './Pokedex.module.css'

class Pokedex extends Component {
    render() {
        let { pokemon, exp, isWinner } = this.props

        let title
        if (isWinner) {
            title = <h1 className={styles.PokedexWinner}>Winning Hand</h1>
        } else {
            title = <h1 className={styles.PokedexLoser}>Losing Hand</h1>
        }

        return (
            <div className={styles.Pokedex}>
                {title}
                <h4>Total Experience: {exp}</h4>
                <div className={styles.PokedexCards}>
                    {pokemon.map((p) => (
                        <Pokecard
                            id={p.id}
                            name={p.name}
                            type={p.type}
                            exp={p.base_experience}
                        />
                    ))}
                </div>
            </div>
        )
    }
}

export default Pokedex
