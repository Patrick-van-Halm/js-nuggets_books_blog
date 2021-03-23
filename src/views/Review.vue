<template>
    <div id="review" class="h-100">
        <v-container fluid class="h-100">
            <v-row class="h-100 my-0">
                <v-col cols="auto" class="d-flex flex-column">
                    <h2 class="fs-3 dancing-script mb-2 flex-grow-0 text-center">Info</h2>
                    <div id="info" class="d-flex flex-column justify-center text-center align-stretch flex-grow-1">
                    <v-img
                        src="@/assets/covers/from_blood_and_ash.jpeg"
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
                <v-col class="mr-2" cols="5" offset="2">
                    <h2 class="fs-3 dancing-script text-center mb-2">My Review</h2>
                    <v-divider class="my-2"/>
                    <p class="lora body-1">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis eos rerum, eum quia dignissimos quaerat dolore saepe. Eum excepturi consequuntur alias voluptatum assumenda, perspiciatis voluptate. Omnis quis exercitationem at obcaecati!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius impedit maxime dolore cum esse et quam obcaecati, deserunt, asperiores omnis dolores iure. Possimus eius suscipit, alias culpa quasi tempore repudiandae!
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam eius quas distinctio modi facilis beatae in veniam quaerat, dolorem, saepe harum ducimus fugiat, at odit? Itaque architecto repellendus sit sapiente?
                        Quibusdam dicta impedit praesentium rerum. Soluta officia quo accusantium quidem ullam odit doloremque culpa. Eaque voluptas tempore magnam. Voluptates unde quae debitis praesentium adipisci cumque, amet sunt fugiat distinctio nobis.
                        Quaerat recusandae nisi facilis numquam atque voluptatum cum rerum nulla suscipit illo rem provident nihil, maxime repellat ex asperiores iusto itaque vero ut ullam vel soluta reiciendis. Facere, neque reprehenderit.
                        Doloremque molestias iure explicabo accusantium ad quasi blanditiis facilis fugit quas! Commodi veniam esse cupiditate, autem accusantium aspernatur nihil dolore pariatur blanditiis harum rem quae voluptates corporis quos mollitia libero?
                        Excepturi voluptates sint beatae perferendis nobis libero placeat consequatur voluptas repellat animi consectetur quos accusantium blanditiis mollitia, neque perspiciatis doloremque natus aut? Quisquam eligendi mollitia beatae doloremque accusantium sed voluptatibus!
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