<template>
    <v-card
        class="mx-auto"
    >
        <v-container fluid>
            <h2 class="title-color">{{$t("app.title")}}</h2>
            <v-divider></v-divider>
            <v-row dense>
                <v-col
                    v-for="card in cards"
                    :key="card.id"
                    :cols="card.flex"
                >
                    <v-card>
                        <v-img
                            :src="card.src"
                            class = "white--text algin-end"
                            gradeint="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
                            height="400px"
                        >
                        <v-card-title class="text-white" style="background-color: white; color: rgb(224, 138, 191)">{{ $t(card.title) }}</v-card-title>
                        </v-img>

                        <v-card>
                            <v-row v-if="card.id == 1">
                                <v-col>
                                    <h3 class="about-color">{{ $t(message) }}</h3>
                                </v-col>
                            </v-row>
                        </v-card>
                        
                    </v-card>
                </v-col>
            </v-row>
            
            <!-- About Page Content -->
            <v-row>
                <v-col>
                   <h2 class="about-color">{{ $t('about.title1') }}</h2> 
                   <p class="p-color">{{ $t('about.para1') }}</p>
                </v-col>
            </v-row>
            <v-row>
                <v-col>
                   <h2 class="about-color">{{ $t('about.title2') }}</h2>
                   <ul>
                        <li class="p-color">{{ $t('about.para2') }}</li>
                        <li class="p-color">{{ $t('about.para3') }}</li>
                        <li class="p-color">{{ $t('about.para4') }}</li>
                        <li class="p-color">{{ $t('about.para5') }}</li>
                   </ul>
                </v-col>
            </v-row>
            
        </v-container>
    </v-card>
</template>
<script>
export default {
    data: () => ({
        message: "message",
        cards: [
            { id: 1, title: 'card.title_1', src: '/img/flower.jpg', flex: 12 },
            { id: 2, title: 'card.loc_1', src: '/img/myitkyina.jpg', flex: 4 },
            { id: 3, title: 'card.loc_2', src: '/img/mandalay.jpg', flex: 4 },
            { id: 4, title: 'card.loc_3', src: '/img/yangon.jpg', flex: 4 },
            { id: 5, title: 'card.loc_4', src: '/img/inle.jpg', flex: 4 },
            { id: 6, title: 'card.loc_5', src: '/img/lashio.jpg', flex: 4 },
            { id: 7, title: 'card.loc_6', src: '/img/pinoolwin.jpg', flex: 4 },
        ]

    })    
}
</script>
<style scoped>
  .title-color {
    color: #ff69b4;
  }

  .about-color{
    color: #ff69b4;
  }
  .p-color{
    color: rgb(224, 138, 191)
  }
  </style>