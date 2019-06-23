<template>
    <div>
        <!--
                        ------------------
                        Vue.js v2 CRUD sample application
                        Uses vue.js v2.0 and vue-router v2.0
                        --
                        Forked from: https://codepen.io/-a/pen/amOYGp
                        GitHub: https://github.com/shershen08/vue.js-v2-crud-application
                        Author: https://github.com/shershen08
                        ------------------
                        -->
    
        <div class="ui container">
            <header class="page-header">
                <div class="branding">
                    <img src="https://vuejs.org/images/logo.png" alt="Logo" title="Home page" class="logo" />
                    <h1 class="ui header">Vue.js v2 CRUD</h1>
                </div>
            </header>
            <main id="app"></main>
        </div>
    
        <template id="product-list">
    <section>
    <div class="ui basic segment right floated actions">
    <router-link class="ui button secondary" :to="{path: '/add-product'}">
        <i class="ui plus icon"></i>
        Add product
    </router-link>
    </div>
    <div class="ui filters basic segment">
    <div class="ui left attached huge labeled input aligned">
        <label for="search-element" class="ui huge label">Product name</label>
        <input v-model="searchKey" class="ui large input" id="search-element" placeholder="Product name" requred/>
    </div>
    </div>
    <table class="ui table b-table">
    <thead>
    <tr>
        <th>Name</th>
        <th>Description</th>
        <th>Price</th>
        <th class="ui three wide column">Actions</th>
    </tr>
    </thead>
    <tbody>
    <tr v-for="product in filteredProducts">
        <td>
        <router-link :to="{name: 'product', params: {product_id: product.id}}">{{ product.name }}</router-link>
        </td>
        <td>{{ product.description }}</td>
        <td>
        {{ product.price }}
        <span class="ui euro icon" aria-hidden="true"></span>
        </td>
        <td>
        <div class="ui buttons">
        <router-link class="ui blue compact basic button mini" :to="{name: 'product-edit', params: {product_id: product.id}}">
            <i class="ui edit icon"></i>
            Edit
        </router-link>
        <router-link class="ui red compact basic raised button mini" :to="{name: 'product-delete', params: {product_id: product.id}}">
            <i class="ui trash icon"></i>
            Delete
        </router-link>
            </div>
        </td>
    </tr>
    </tbody>
    </table>
    </section>
</template>

<template id="add-product">
    <section>
        <h2>Add new product</h2>
        <form v-on:submit="createProduct">
            <div class="form-group">
                <label for="add-name">Name</label>
                <input class="form-control" id="add-name" v-model="product.name" required/>
            </div>
            <div class="form-group">
                <label for="add-description">Description</label>
                <textarea class="form-control" id="add-description" rows="10" v-model="product.description"></textarea>
            </div>
            <div class="form-group">
                <label for="add-price">Price, <span class="glyphicon glyphicon-euro"></span></label>
                <input type="number" class="form-control" id="add-price" v-model="product.price" />
            </div>
            <button type="submit" class="btn btn-primary">Create</button>
            <router-link class="btn btn-default" :to="{name: 'root'}">Cancel</router-link>
        </form>
    </section>
</template>

<template id="product">
    <section>
        <h2>{{ product.name }}</h2>
        <b>Description: </b>
        <div>{{ product.description }}</div>
        <b>Price:</b>
        <div>{{ product.price }}<span class="glyphicon glyphicon-euro"></span></div>
        <br/>
        <span class="glyphicon glyphicon-arrow-left" aria-hidden="true"></span>
        <router-link to="/">Back to product list</router-link>
    </section>
</template>

<template id="product-edit">
    <section>
        <h2>Edit product</h2>
        <form v-on:submit="updateProduct">
            <div class="form-group">
                <label for="edit-name">Name</label>
                <input class="form-control" id="edit-name" v-model="product.name" required/>
            </div>
            <div class="form-group">
                <label for="edit-description">Description</label>
                <textarea class="form-control" id="edit-description" rows="3" v-model="product.description"></textarea>
            </div>
            <div class="form-group">
                <label for="edit-price">Price, <span class="glyphicon glyphicon-euro"></span></label>
                <input type="number" class="form-control" id="edit-price" v-model="product.price" />
            </div>
            <button type="submit" class="btn btn-primary">Save</button>
            <router-link to="/" class="btn btn-default">Cancel</router-link>
        </form>
    </section>
</template>

<template id="product-delete">
    <section>
        <h2>Delete product {{ product.name }}</h2>
        <form v-on:submit="deleteProduct">
            <p>The action cannot be undone.</p>
            <button type="submit" class="btn btn-danger">Delete</button>
            <router-link to="'/'" class="btn btn-default">Cancel</router-link>
        </form>
    </section>
</template>

</div>
</template>
