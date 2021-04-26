import React from 'react';


export default class OneClass extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            change: true,
            panes: [],
        }
    }

    componentDidMount() {
        this.setState({
            panes: [
                {
                    title: 'name',
                    content: this.createContent
                }
            ]
        })
    }

    createContent = () => {
        return (
            <div>
                { this.state.change ? (
                    <div>
                        我显示了
                    </div>
                ) : ""}
            </div>
        );
    }

    show = () => {
        this.setState({
            change: !this.state.change,
        });
    }

    render() {
        console.log(this.state.panes.length !== 0 && this.state.panes[0].content());
        return (
            <div>
                {this.state.panes && this.state.panes.map((item) => (
                    <div key={1}>
                        <h1>
                            {item.title}
                        </h1>
                        <div>
                            {item.content()}
                        </div>
                    </div>
                ))}

                <button onClick={this.show}>
                    {this.state.change ? "消失" : "显示"}
                </button>
            </div>
        );
    }
}