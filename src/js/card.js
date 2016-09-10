import React from 'react';

class Card extends React.Component {
    render() {
        return (
            <div className="full-page row align-center align-middle">
                <div className="shrink column">
                    <div className="callout text-center">
                        <h1>Leonhardt Koepsell</h1>
                        <p><em>Software Engineer</em></p>
                        <ul className="no-bullet">
                            <li>medium: <a href="https://medium.com/@lnhrdt" target="_blank">@lnhrdt</a></li>
                            <li>github: <a href="https://github.com/lnhrdt" target="_blank">@lnhrdt</a></li>
                            <li>twitter: <a href="https://twitter.com/lnhrdt" target="_blank">@lnhrdt</a></li>
                            <li>linkedin: <a href="https://www.linkedin.com/in/leonhardtkoepsell" target="_blank">leonhardtkoepsell</a></li>
                            <li>email: <a href="mailto:leonhardt@koepsell.io">leonhardt@koepsell.io</a></li>
                            <li>mobile: <a href="tel:+18182136258">+18182136258</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}

export default Card
