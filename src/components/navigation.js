import React, { Component } from 'react'

export default class Navigation extends Component {
    render () {
        return (
            <div class ="nav">
                <nav>
                    <ul class = "left">
                        <li>
                            <a href = "/">
                                A
                            </a>
                        </li>
                    </ul>
                    
                    <ul class = 'right'>
                        <li>
                            <a href = "/">Home</a>
                        </li>
                        <li>
                            <a href = "#about">About</a>
                        </li>
                        <li>
                            <a href = "#projects">Projects</a>
                        </li>
                        <li>
                            <a href = "#resume">Resume</a>
                        </li>
                    </ul>
                </nav>

            </div>
        )
    }
}