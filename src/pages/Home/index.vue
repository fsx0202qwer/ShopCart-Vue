<template>
  <div class="outer">
    <TypeNav></TypeNav>
    <ListContainer></ListContainer>
    <TodayRecommend></TodayRecommend>
    <Rank></Rank>
    <Like></Like>
    <Floor v-for="floor in floorList" :key="floor.id" :list="floor"></Floor>
    <Brand></Brand>
  </div>
</template>

<script>
import ListContainer from "@/pages/Home/ListContainer";
import TodayRecommend from "@/pages/Home/TodayRecommend";
import Rank from "@/pages/Home/Rank";
import Like from "@/pages/Home/Like";
import Floor from "@/pages/Home/Floor";
import Brand from "@/pages/Home/Brand";
import { mapState } from "vuex";
export default {
  name: "Home",
  components: {
    ListContainer,
    TodayRecommend,
    Rank,
    Like,
    Floor,
    Brand,
  },
  computed: {
    ...mapState(["CategoryList"]),
    ...mapState({ floorList:(state) => state.home.floorList,}),
  },
  methods: {
    add() {
      // 派发action
      this.$store.dispatch("CategoryList");
    },
  },
  mounted() {
    this.$store.dispatch("getFloorList");
    // 获取用户信息在首页展示
  },
};
</script>

<style>
</style>