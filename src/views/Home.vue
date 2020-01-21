<template>
    <div id="app">
        <v-app>
            <v-card>
                <v-card-title>
                    Promotion en cours
                    <v-spacer></v-spacer>
                    <v-text-field
                            append-icon="pi pi-search"
                            label="Search"
                            single-line
                            hide-details
                            v-model="search"
                    ></v-text-field>
                </v-card-title>
                <v-data-table
                        v-model="selected"
                        :headers="headers"
                        :items="listPromo"
                        :search="search">
                    <template slot="items" slot-scope="props">
                        <tr @click="redirect()">
                            <td>{{ props.item.name }}</td>
                            <td class="text-xs-right">{{ props.item.description }}</td>
                            <td class="text-xs-right">{{ props.item.dateEnd }}</td>
                            <td class="text-xs-right">{{ props.item.remise }}</td>
                        </tr>
                    </template>
                    <v-alert slot="no-results" :value="true" color="error" icon="warning">
                        La promotion "{{ search }}" impossible à trouver.
                    </v-alert>
                </v-data-table>
            </v-card>
        </v-app>
    </div>
</template>

<script>
    export default {
        name: "Home",
        data() {
            return {
                search: '',
                headers: [
                    {
                        text: 'Name',
                        align: 'left',
                        value: 'name'
                    },
                    {
                        text: 'Description',
                        value: 'description'
                    },
                    {
                        text: 'Date de fin',
                        value: 'dateEnd'
                    },
                    {
                        text: 'Remise',
                        value: 'remise'
                    }
                ],
                listPromo: [
                    {
                        name: 'Frozen Yogurt',
                        description: 'test description',
                        dateEnd: "2020-11-23",
                        remise: 30
                    },
                    {
                        name: 'Ice cream sandwich',
                        description: 'test description',
                        dateEnd: "2020-11-23",
                        remise: 30
                    },
                    {
                        name: 'Eclair',
                        description: 'test description',
                        dateEnd: "2020-11-23",
                        remise: 30
                    }
                ]
            }
        },
        methods: {
            redirect(){
                this.$router.push({ name: 'addQrCode' })
            }
        }
    }
</script>

<style scoped>
    .mobile {
        color: #333;
    }

    @media screen and (max-width: 768px) {
        .mobile table.v-table tr {
            max-width: 100%;
            position: relative;
            display: block;
        }

        .mobile table.v-table tr:nth-child(odd) {
            border-left: 6px solid deeppink;
        }

        .mobile table.v-table tr:nth-child(even) {
            border-left: 6px solid cyan;
        }

        .mobile table.v-table tr td {
            display: flex;
            width: 100%;
            border-bottom: 1px solid #f5f5f5;
            height: auto;
            padding: 10px;
        }

        .mobile table.v-table tr td ul li:before {
            content: attr(data-label);
            padding-right: .5em;
            text-align: left;
            display: block;
            color: #999;

        }
        .v-datatable__actions__select
        {
            width: 50%;
            margin: 0px;
            justify-content: flex-start;
        }
        .mobile .theme--light.v-table tbody tr:hover:not(.v-datatable__expand-row) {
            background: transparent;
        }

    }
    .flex-content {
        padding: 0;
        margin: 0;
        list-style: none;
        display: flex;
        flex-wrap: wrap;
        width: 100%;
    }

    .flex-item {
        padding: 5px;
        width: 50%;
        height: 40px;
        font-weight: bold;
    }
</style>
