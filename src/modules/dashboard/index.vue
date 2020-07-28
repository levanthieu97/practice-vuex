<template>
  <v-container>
    <v-row no-gutters>
      <v-col>
        <v-data-table
          :headers="headers"
          :items="listProduct"
          :items-per-page="5"
          :fixed-header="true"
          class="elevation-5"
        >
          <template v-slot:top>
            <v-toolbar flat color="white">
              <v-spacer></v-spacer>
              <v-dialog v-model="dialog" max-width="500px">
                <template v-slot:activator="{ on, attrs }">
                  <v-btn color="primary" dark class="mb-2" v-bind="attrs" v-on="on">New Item</v-btn>
                </template>
                <v-card>
                  <v-card-title>
                    <span class="headline">{{ formTitle }}</span>
                  </v-card-title>

                  <v-card-text>
                    <v-container>
                      <v-row>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.codeProduct" label="Mã sản phẩm"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.name" label="Tên sản phẩm"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.category" label="Danh mục"></v-text-field>
                        </v-col>
                        <v-col cols="12" sm="6" md="6">
                          <v-text-field v-model="editedItem.price" type="number" label="Giá sản phẩm"></v-text-field>
                        </v-col>
                      </v-row>
                    </v-container>
                  </v-card-text>

                  <v-card-actions>
                    <v-spacer></v-spacer>
                    <v-btn color="blue darken-1" @click="close" text>Cancel</v-btn>
                    <v-btn color="blue darken-1" @click="save" text>Save</v-btn>
                  </v-card-actions>
                </v-card>
              </v-dialog>
            </v-toolbar>
          </template>
          <!-- <template v-slot:item.no = "{ item }">
                        {{props.index}} a
          </template>-->
          <!-- <template v-slot:body= " { items, index }">
                        <tbody>
                            <tr v-for="item in items" :key="item.id">
                                <td>{{ item[handler.value]}}</td>
                                <td>{{ item.no }}</td>
                                <td>{{ item.name }} </td>
                                <td>{{ item.category}}</td>
                            </tr>
                        </tbody>
          </template>-->
          <template v-slot:item.actions = "{item}">
            <v-icon @click="editItem(item)">mdi-pencil</v-icon>
            <v-icon @click="deleteItem(item)">mdi-delete</v-icon>
          </template>
        </v-data-table>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { items } from "./utils";
import _ from 'lodash';
import { mapGetters,mapActions } from 'vuex';
export default {
  data: () => ({
    headers: [
      // { text: "STT", value: "no", align: "center" },
      {
        text: "Mã sản phẩm",
        align: "center",
        value: "codeProduct",
      },
      { text: "Tên sản phẩm", value: "name" },
      { text: "Danh mục", value: "category" },
      { text: "Giá sản phẩm", value: "price" },
      { text: "", value: "actions", sortable: false },
    ],
    products: [],
    index: 0,
    dialog: false,
    editedIndex: -1,
    editedItem: {
      codeProduct: '',
      name: '',
      category: '',
      price: 0,
    },
    defaultItem: {
      codeProduct: '',
      name: '',
      category: '',
      price: 0,
    },
    params: {
      type: '',
      index: 0,
      product: {}
    }
  }),

  // created() {
  //   this.products = this.listProduct;
  // },

  computed: {
    ...mapGetters("dashboard",["listProduct"]),

    itemsWithProduct() {
      this.products = this.products.map((products, index) => ({
        ...products,
        no: index + 1,
      }));

      return this.products;
    },

    formTitle () {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item'
    },
  },

  watch: {
    dialog (val) {
        val || this.close()
      },
  },

  methods: {
    ...mapActions("dashboard", ["changeProduct"]),

    editItem (item) {
        // this.editedIndex = this.desserts.indexOf(item)
        // this.editedItem = Object.assign({}, item)
        // this.dialog = true
        console.log(item);
        this.editedIndex  = _.indexOf(this.listProduct,item);
        // this.editedItem.codeProduct = item.codeProduct;
        // this.editedItem = _.omit(item, 'no');
        this.editedItem = _.assign({}, item);
        console.log(this.editedItem);
        this.dialog = true
      },

      deleteItem (item) {
        // const index = this.desserts.indexOf(item)
        // confirm('Are you sure you want to delete this item?') && this.desserts.splice(index, 1)
        this.params.index = _.indexOf(this.listProduct,item);
        this.params.type = "delete";
        console.log(this.params);
        confirm('Are you sure you want to delete this item?') && this.changeProduct(this.params)
      },

      close(){
        this.dialog = false;

        // https://kieblog.vn/vuejs-nexttick-la-gi-su-dung-khi-nao/
        this.$nextTick( () => {
          console.log("next Tick is running")
          this.editedItem = _.assign({}, this.defaultItem);
          this.editedIndex = -1;
        })
      },

      save(){
        if(this.editedIndex > -1 ){
          this.params.type = "edit",
          this.params.product = this.editedItem,
          this.params.index = this.editedIndex,
          console.log(this.params);
          this.changeProduct(this.params)
        }else{
          this.params.type = "create",
          this.params.product = this.editedItem,
          this.changeProduct(this.params)
        }
        this.close()
      },
  }
};
</script>

<style lang="sass" scoped>

</style>

