<template>
    <div id="review" class="h-100">
        <v-container fluid class="h-100">
            <v-row class="h-100 my-0">
                <v-col cols="auto" class="d-flex flex-column">
                    <h2 class="fs-3 dancing-script mb-2 flex-grow-0 text-center">Info</h2>
                    <div id="info" class="d-flex flex-column justify-center text-center align-stretch flex-grow-1">
                    <v-img
                        src="@/assets/covers/balance.jpeg"
                        max-width="200"
                        max-height="300"
                        class="my-2 mx-auto"
                    />
                    <v-divider class="my-2" />
                     <v-simple-table>
                        <template v-slot:default>
                            <tbody>
                                <tr>
                                    <th class="text-left">
                                        Name
                                    </th>
                                    <td class="text-right">
                                        Book 1
                                    </td>
                                </tr>
                                <tr>
                                    <th class="text-left">
                                        Age Rating
                                    </th>
                                    <td class="text-right">
                                        blah
                                    </td>
                                </tr>
                            </tbody>
                        </template>
                    </v-simple-table>
                    <v-divider class="my-2" />
                    <v-rating
                        :value=3
                        color="yellow darken-3"
                        background-color="grey darken-1"
                        half-increments
                        readonly
                        :size="32"
                        class="flex-grow-0 text-center align-center mx-3"
                    />
                    </div>
                </v-col>
                <v-divider vertical/>
                <v-col>
                    <h2 class="fs-3 dancing-script text-center mb-2">My Review</h2>
                    <v-divider class="my-2"/>
                    <p>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eos rerum, eum quia dignissimos quaerat dolore saepe. Eum excepturi consequuntur alias voluptatum assumenda, perspiciatis voluptate. Omnis quis exercitationem at obcaecati!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius impedit maxime dolore cum esse et quam obcaecati, deserunt, asperiores omnis dolores iure. Possimus eius suscipit, alias culpa quasi tempore repudiandae!
                    </p>
                </v-col>
            </v-row>
        </v-container>
    </div>
</template>

<style>
.shrink-to-content{
    height: 100%;
    min-height: 0
}
</style>

<script>
export default {
    name: 'Review'
}
</script>