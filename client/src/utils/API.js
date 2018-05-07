import axios from "axios";
import { getAccessToken } from "./AuthService";

const GOOGLE_MAP_API_KEY = 'AIzaSyBxgMHK10T-YS90r9OQhsSJm_aeEFAGcZ8';
const GOOGLE_MAP_GEOCODE_URL = 'https://maps.googleapis.com/maps/api/geocode/json';
const DEFAULT_HEADER = { headers: { Authorization: `Bearer ${getAccessToken()}` } };

export default {

    // SHINDIG ROUTES
    // ===================================================
    // ===================================================

    // creates a shindig to the database
    createShindig: function (shindigData) {
        return axios.post("/api/shindig", shindigData, DEFAULT_HEADER);
    },

    // Gets all shindigs
    getAllShindigs: function () {
        return axios.get("/api/shindig", DEFAULT_HEADER);
    },

    // Gets the shindig with the given shindigId
    getShindig: function (shindigId) {
        return axios.get("/api/shindig/" + shindigId, DEFAULT_HEADER);
    },

    // Updates the shindig with the given shindigId
    updateShindig: function (shindigId, shindigData) {
        return axios.put("/api/shindig/" + shindigId, shindigData, DEFAULT_HEADER);
    },

    // Deletes the shindig with the given shindigId
    deleteShindig: function (shindigId) {
        return axios.delete("/api/shindig/" + shindigId, DEFAULT_HEADER);
    },

    // ===================================================
    // ===================================================



    // CATEGORY ROUTES
    // ===================================================
    // ===================================================

    // creates a category for a shindig
    createCategory: function (shindigId, categoryData) {
        return axios.post("/api/shindig/" + shindigId + "/category", categoryData, DEFAULT_HEADER);
    },

    // Gets all categories for a given shindigId
    getAllCategories: function (shindigId) {
        return axios.get("/api/shindig/" + shindigId + "/category", DEFAULT_HEADER);
    },

    // Gets the Category with the given shindigId and categoryId
    getCategory: function (shindigId, categoryId) {
        return axios.get("/api/shindig/" + shindigId + "/category/" + categoryId, DEFAULT_HEADER);
    },

    // Updates the Category with the given shindigId, categoryId, and category data
    updateCategory: function (shindigId, categoryId, categoryData) {
        return axios.put("/api/shindig/" + shindigId + "/category/" + categoryId, categoryData, DEFAULT_HEADER);
    },

    // Deletes the Category with the given shindigId and categoryId
    deleteCategory: function (shindigId, categoryId) {
        return axios.delete("/api/shindig/" + shindigId + "/category/" + categoryId, DEFAULT_HEADER);
    },


    // ===================================================
    // ===================================================



    // ITEM ROUTES
    // ===================================================
    // ===================================================

    // creates a item for the given category 
    createItem: function (shindigId, categoryId, itemData) {
        return axios.post("/api/shindig/" + shindigId + "/category/" + categoryId + "/item", itemData, DEFAULT_HEADER);
    },

    // Gets all items for a given category
    getAllItems: function (shindigId, categoryId) {
        return axios.get("/api/shindig/" + shindigId + "/category/" + categoryId + "/item", DEFAULT_HEADER);
    },

    // Gets the item with the given shindigId and categoryId
    getItem: function (shindigId, categoryId, itemId) {
        return axios.get("/api/shindig/" + shindigId + "/category/" + categoryId + "/item/" + itemId, DEFAULT_HEADER);
    },

    // Updates the item with the given shindigId and categoryId
    updateItem: function (shindigId, categoryId, itemId, itemData) {
        return axios.put("/api/shindig/" + shindigId + "/category/" + categoryId + "/item/" + itemId, itemData, DEFAULT_HEADER);
    },

    // Deletes the item with the given shindigId and categoryId
    deleteItem: function (shindigId, categoryId, itemId) {
        return axios.delete("/api/shindig/" + shindigId + "/category/" + categoryId + "/item/" + itemId, DEFAULT_HEADER);
    },


    // ===================================================
    // ===================================================



    // VOTE ROUTES
    // ===================================================
    // ===================================================

    // creates a vote for a given item 
    createVote: function (shindigId, categoryId, itemId) {
        return axios.post("/api/shindig/" + shindigId + "/category/" + categoryId + "/item/" + itemId + "/vote", DEFAULT_HEADER);
    },

    // Gets all votes for a given item
    getVotesForItem: function (shindigId, categoryId, itemId) {
        return axios.get("/api/shindig/" + shindigId + "/category/" + categoryId + "/item/" + itemId + "/vote", DEFAULT_HEADER);
    },

    // Gets all votes for a given category
    getAllVotesForCategory: function (shindigId, categoryId, itemId) {
        return axios.get("/api/shindig/" + shindigId + "/category/" + categoryId + "/vote", DEFAULT_HEADER);
    },

    // Deletes all of the votes for a given item for a given user
    deleteAllVotesOnItemForUser: function (shindigId, categoryId, itemId, voteData) {
        return axios.delete("/api/shindig/" + shindigId + "/category/" + categoryId + "/item/" + itemId + "/vote", voteData, DEFAULT_HEADER);
    },


    // ===================================================
    // ===================================================



    // USER ROUTES
    // ===================================================
    // ===================================================

    // creates a user
    createUser: function (name, imageUrl, email, authId) {
        return axios.post("/api/user", name, imageUrl, email, authId);
    },

    // Gets all users
    getAllUsers: function () {
        return axios.get("/api/user");
    },

    // Gets the user with the given userId
    getUser: function (userId) {
        return axios.get("/api/user/" + userId);
    },

    // Updates the user with the given userId
    updateUser: function (userId, userData) {
        return axios.put("/api/user/" + userId, userData);
    },

    // Deletes the user with the given userId
    deleteUser: function (userId) {
        return axios.delete("/api/user/" + userId);
    },

    // Gets all shindigs for a user
    getAllShindigsForUser: function (userId) {
        return axios.get("/api/user" + userId + "/shindig");
    },


    // ===================================================
    // ===================================================



    // SHINDIG USER ROUTES
    // ===================================================
    // ===================================================

    // creates a user for a shindig
    addUserToShindig: function (shindigId, userData) {
        return axios.post("/api/shindig/" + shindigId + "/user", userData);
    },

    // Gets all users for a given shindigId
    getAllUsersForAShindig: function (shindigId) {
        return axios.get("/api/shindig/" + shindigId + "/user");
    },

    // Gets the user with the given shindigId and userId
    getShindigUser: function (shindigId, userId) {
        return axios.get("/api/shindig/" + shindigId + "/user/" + userId);
    },

    // Updates the user with the given shindigId, userId, and user data
    updateShindigUser: function (shindigId, userId, userData) {
        return axios.put("/api/shindig/" + shindigId + "/user/" + userId, userData);
    },

    // Deletes the user with the given shindigId and userId
    deleteShindigUser: function (shindigId, userId) {
        return axios.delete("/api/shindig/" + shindigId + "/user/" + userId);
    },


    // ===================================================
    // ===================================================



    // YELP ROUTES
    // ===================================================
    // ===================================================

    //GET https://api.yelp.com/v3/businesses/search

    // creates a user for a shindig
    searchYelp: function (location, term) {
        return axios.get('/api/yelp', {
            params: {
                term: term,
                location: location
            }
        })
    },

    yelpBusiness: function (yelpId) {
        return axios.get('/api/yelp/' + yelpId)
    },

    // ===================================================
    // ===================================================



    // GOOGLE MAPS ROUTES
    // ===================================================
    // ===================================================

    getGoogleGeocode: function (location) {
        console.log(location);
        return axios.get(`${GOOGLE_MAP_GEOCODE_URL}?address=${location}&key=${GOOGLE_MAP_API_KEY}`);
    }

};