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
                <v-col class="d-flex justify-center">
                    <v-col cols="6">
                        <h2 class="fs-3 dancing-script text-center mb-2">My Review</h2>
                        <v-divider class="my-2"/>
                        <p class="body-1" style="font-family: 'Roboto Slab', serif !important; font-size: 1.1rem !important">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate aut praesentium eum dolore sit nisi, eos unde, reiciendis est quia, facere magnam obcaecati error! Fugiat sapiente corporis velit. Corrupti, veniam.
                            Cupiditate unde fuga saepe tempore dicta quisquam non aliquid doloremque sapiente provident voluptatibus consequatur nobis sit impedit, iusto quam beatae totam fugiat eaque inventore recusandae odio animi nesciunt? Minus, nihil!
                            Sit quisquam voluptatem blanditiis repellendus dolore quia repellat cumque odit voluptate impedit repudiandae ut id provident, ex suscipit laudantium recusandae corporis consequatur! Consectetur omnis vero non incidunt molestias iusto velit.
                            Animi nam voluptatem iusto quisquam culpa autem laboriosam quidem similique dicta a inventore sunt repellendus odio id, esse libero exercitationem ducimus nostrum fuga et voluptatibus asperiores? Velit cumque nemo fugit?
                            Accusamus iste ipsum harum qui quas, iure repellendus culpa sed exercitationem? Nihil aliquam, quo eius et aut facere excepturi libero doloribus impedit recusandae. Natus dignissimos laudantium inventore praesentium tenetur facilis!
                            Vitae libero iusto rerum minima laboriosam dolor, asperiores in magnam eos ex minus, reiciendis sit ducimus nihil. Esse, perspiciatis. Aliquam repellat commodi excepturi, quisquam repellendus id nihil iure perferendis eius?
                            Ipsam exercitationem, fugit quos dolor adipisci amet nobis delectus, quia consequatur porro nisi vero obcaecati ad, neque harum veniam inventore? Vero optio fuga dolor! Officiis molestias rem blanditiis eaque sunt?
                        </p>
                    </v-col>
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