import axios from "axios";

export default {

    // SHINDIG ROUTES
    // ===================================================
    // ===================================================

    // creates a shindig to the database
    createShindig: function (shindigData) {
        return axios.post("/api/shindig", shindigData);
    },

    // Gets all shindigs
    getAllShindigs: function () {
        return axios.get("/api/shindig");
    },

    // Gets the shindig with the given shindigId
    getShindig: function (shindigId) {
        return axios.get("/api/shindig/" + shindigId);
    },

    // Updates the shindig with the given shindigId
    updateShindig: function (shindigId, shindigData) {
        return axios.put("/api/shindig/" + shindigId, shindigData);
    },

    // Deletes the shindig with the given shindigId
    deleteShindig: function (shindigId) {
        return axios.delete("/api/shindig/" + shindigId);
    },

    // ===================================================
    // ===================================================



    // CATEGORY ROUTES
    // ===================================================
    // ===================================================

    // creates a category for a shindig
    createCategory: function (shindigId, categoryData) {
        return axios.post("/api/shindig/" + shindigId + "/category", categoryData);
    },

    // Gets all categories for a given shindigId
    getAllCategories: function (shindigId) {
        return axios.get("/api/shindig/" + shindigId + "/category");
    },

    // Gets the Category with the given shindigId and categoryId
    getCategory: function (shindigId, categoryId) {
        return axios.get("/api/shindig/" + shindigId + "/category/" + categoryId);
    },

    // Updates the Category with the given shindigId, categoryId, and category data
    updateCategory: function (shindigId, categoryId, categoryData) {
        return axios.put("/api/shindig/" + shindigId + "/category/" + categoryId, categoryData);
    },

    // Deletes the Category with the given shindigId and categoryId
    deleteCategory: function (shindigId, categoryId) {
        return axios.delete("/api/shindig/" + shindigId + "/category/" + categoryId);
    },


    // ===================================================
    // ===================================================



    // ITEM ROUTES
    // ===================================================
    // ===================================================

        // creates a item for the given category 
    createItem: function (shindigId, categoryId, itemData) {
        return axios.post("/api/shindig/" + shindigId + "/category/" + categoryId + "/item", itemData);
    },

    // Gets all items for a given category
    getAllItems: function (shindigId, categoryId) {
        return axios.get("/api/shindig/" + shindigId + "/category/" + categoryId + "/item");
    },

    // Gets the item with the given shindigId and categoryId
    getItem: function (shindigId, categoryId, itemId) {
        return axios.get("/api/shindig/" + shindigId + "/category/" + categoryId + "/item/" + itemId);
    },

    // Updates the item with the given shindigId and categoryId
    updateItem: function (shindigId, categoryId, itemId, itemData) {
        return axios.put("/api/shindig/" + shindigId + "/category/" + categoryId + "/item/" + itemId, itemData);
    },

    // Deletes the item with the given shindigId and categoryId
    deleteItem: function (shindigId, categoryId, itemId) {
        return axios.delete("/api/shindig/" + shindigId + "/category/" + categoryId + "/item/" + itemId);
    },


    // ===================================================
    // ===================================================



    // VOTE ROUTES
    // ===================================================
    // ===================================================

        // creates a vote for a given item 
    createVote: function (shindigId, categoryId, itemId) {
        return axios.post("/api/shindig/" + shindigId + "/category/" + categoryId + "/item/" + itemId + "/vote");
    },

    // Gets all votes for a given item
    getAllVotes: function (shindigId, categoryId, itemId) {
        return axios.get("/api/shindig/" + shindigId + "/category/" + categoryId + "/item/" + itemId + "/vote");
    },

    // Deletes all of the votes for a given item for a given user
    deleteAllVotesOnItemForUser: function (shindigId, categoryId, itemId, voteData) {
        return axios.delete("/api/shindig/" + shindigId + "/category/" + categoryId + "/item/" + itemId + "/vote", voteData);
    },


    // ===================================================
    // ===================================================



    // USER ROUTES
    // ===================================================
    // ===================================================

    // creates a user
    createUser: function (userData) {
        return axios.post("/api/user", userData);
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
    }

};