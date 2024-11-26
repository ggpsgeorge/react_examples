import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';

class Track extends React.Component {
    render() {
        return <li data-icon="play" data-icon-align="right"><img src={this.props.item.img} />
            <h4>{this.props.item.title}</h4>
            <p>{this.props.item.artist}</p>
        </li>;
    }
}

class ScrollView extends React.Component {
    
    categories = [
        { id: 'pop', name: 'Pop' },
        { id: 'rock', name: 'Rock' },
        { id: 'jazz', name: 'Jazz' },
        { id: 'piano', name: 'Piano' },
        { id: 'electric', name: 'Electric' }
    ];
    
    data = {
        pop: [
            { id: 1, img: 'https://img.mobiscroll.com/demos/paging/Adele_1x.png', title: 'Hello', artist: 'Adele' },
        ],
        rock: [
            { id: 20, img: 'https://img.mobiscroll.com/demos/paging/Elle_King_1x.png', title: 'Ex\'s & Oh\'s', artist: 'Elle King' },
        ],
        jazz: [
            { id: 35, img: 'https://img.mobiscroll.com/demos/paging/Jeff_Lorber_1x.png', title: 'Get Up', artist: 'Jeff Lorber Fusion' },
        ],
        piano: [
            { id: 50, img: 'https://img.mobiscroll.com/demos/paging/Rachmaninoff_1x.png', title: 'Etudes Tableaux', artist: 'Rachmaninoff' },
        ],
        electric: [
            { id: 60, img: 'https://img.mobiscroll.com/demos/paging/Major-Lazer_1x.png', title: 'Lean On', artist: 'Major Lazer & DJ Snake Featuring M0' },
        ]
    };
    
    constructor(props) {
        super(props);
        this.state = {
            selectedCategory: 'pop'
        };
    }

    setCategory = (category) => {
        this.setState({
            selectedCategory: category.id
        });
    }
    
    onAnimationStart = (event, inst) => {
        const selectedIndex = parseInt((-(event.destinationX / inst.contWidth)).toString(), 10);
        const selectedCategory = this.categories[selectedIndex].id;
        
        if (selectedCategory !== this.state.selectedCategory) {
            this.setState({ selectedCategory }); 
        }
    }
    
    shouldComponentUpdate = (nextProps, nextState) => {
        if (nextState.selectedCategory != this.state.selectedCategory) {
            this.refs.contentView.instance.navigate(nextState.selectedCategory);
            return false;
        }
        return true;
    }
    
    render() {
        return (
            <div style={{height:'100%'}}>
                <mobiscroll.TabNav ref="categoryNav">
                    {this.categories.map((category) => {
                        return <mobiscroll.NavItem key={category.id}
                                id={category.id}
                                selected={category.id == this.state.selectedCategory}
                                onClick={this.setCategory.bind(this, category)}
                            >
                                {category.name}
                            </mobiscroll.NavItem>
                    })}
                </mobiscroll.TabNav>
                <div className="md-paging">
                    <mobiscroll.ScrollView 
                        ref="contentView"
                        className="md-content"
                        layout={1}
                        paging={true}
                        threshold={15}
                        cssClass="md-page"
                        onAnimationStart={this.onAnimationStart}
                    >
                        {this.categories.map((category) => {
                            return <div key={category.id} className={'md-'+ category.id} data-id={category.id}>
                                <mobiscroll.Listview  
                                    itemType={Track} 
                                    data={this.data[category.id]}
                                    className="md-list-cont"
                                    swipe={false}
                                    striped={true}
                                    enhance={true} 
                                    />
                            </div>;
                        })}
                    </mobiscroll.ScrollView>
                </div>
            </div>
        );
    }
}

export default ScrollView