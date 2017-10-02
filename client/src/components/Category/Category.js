import React, { Component } from "react";
import CategorySettings from '../CategorySettings';
import ItemList from '../ItemList';
import AddItem from '../AddItem';
import { Tabs, Tab } from 'material-ui/Tabs';
import { Card, CardTitle, CardText } from 'material-ui/Card';
import Setting from 'material-ui/svg-icons/action/settings';
import Search from 'material-ui/svg-icons/action/search';
import ViewList from 'material-ui/svg-icons/action/view-list';
import Add from 'material-ui/svg-icons/content/add';
import API from "../../utils/API";

const styles = {
    categoryCard: {
        marginBottom: "20px"
    }
}

class Category extends Component {
    constructor(props) {
        super(props);

        this.state = {
            shindigId: props.shindigId,
            categoryId: props.categoryData.id,
            items: []
        };
    }

    componentDidMount() {
        this.loadItems(this.state.shindigId);
    }

    loadItems = () => {
        API.getAllItems(this.state.shindigId, this.state.categoryId)
            .then(res => this.setState({
                items: res.data
            }))
            .catch(err => console.log(err));
    };

    handleAddVote = e => {
        e.preventDefault();

        const shindigId = this.state.shindigId;
        const categoryId = this.state.categoryId;
        const itemId = this.state.itemId;

        API.createVote(shindigId, categoryId, itemId)
            .then()
            .catch(err => console.log(err));
    }

    onNameChange = itemName => {
        this.setState({ itemName });
    }

    onDescriptionChange = itemDescription => {
        this.setState({ itemDescription });
    }

    render() {

        return (
            <Card style={styles.categoryCard}>
                <CardTitle title={this.props.categoryData.name} />
                <Tabs>
                    <Tab icon={<ViewList />}>
                        <CardText expandable={false}>
                            <ItemList shindigId={this.state.shindigId} categoryId={this.state.categoryId} items={this.state.items}/>
                        </CardText>
                    </Tab>
                    <Tab icon={<Add />} >
                        <CardText expandable={false}>
                            <AddItem
                                shindigId={this.props.shindigId}
                                categoryData={this.props.categoryData}
                                onItemAdd={this.loadItems}
                            />
                        </CardText>
                    </Tab>
                    <Tab display={this.props.categoryData.yelpEnabled} icon={<Search />} >
                        <CardText expandable={false}>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Donec mattis pretium massa. Aliquam erat volutpat. Nulla facilisi.
                        Donec vulputate interdum sollicitudin. Nunc lacinia auctor quam sed pellentesque.
                        Aliquam dui mauris, mattis quis lacus id, pellentesque lobortis odio.
                    </CardText>
                    </Tab>
                    <Tab icon={<Setting />} >
                        <CardText expandable={false}>
                            <CategorySettings
                                shindigId={this.props.shindigId}
                                categoryData={this.props.categoryData}
                                onCategoriesChange={this.props.onCategoriesChange}
                            />
                        </CardText>
                    </Tab>

                </Tabs>

            </Card>
        );
    };
};

export default Category;