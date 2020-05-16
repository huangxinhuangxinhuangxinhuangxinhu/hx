<template>
  <el-form ref="form" :model="sizeForm" label-width="80px" size="mini" class="fromData">
    <el-form-item label="商品名称">
      <el-input v-model="sizeForm.name"></el-input>
    </el-form-item>
    <el-form-item label="价格">
      <el-input v-model="sizeForm.price"></el-input>
    </el-form-item>
    <el-form-item label="图片">
      <el-upload action="#" list-type="picture-card" :auto-upload="false">
        <i slot="default" class="el-icon-plus"></i>
        <div slot="file" slot-scope="{file}">
          <img class="el-upload-list__item-thumbnail" :src="file.url" alt />
          <span class="el-upload-list__item-actions">
            <span class="el-upload-list__item-preview" @click="handlePictureCardPreview(file)">
              <i class="el-icon-zoom-in"></i>
            </span>
            <span
              v-if="!disabled"
              class="el-upload-list__item-delete"
              @click="handleDownload(file)"
            >
              <i class="el-icon-download"></i>
            </span>
            <span v-if="!disabled" class="el-upload-list__item-delete" @click="handleRemove(file)">
              <i class="el-icon-delete"></i>
            </span>
          </span>
        </div>
      </el-upload>
      <el-dialog :visible.sync="dialogVisible">
        <img width="100%" :src="dialogImageUrl" alt />
      </el-dialog>
    </el-form-item>
    <el-form-item label="库存">
      <el-input v-model="sizeForm.sku"></el-input>
    </el-form-item>

    <el-form-item size="large">
      <el-button type="primary" @click="onSubmit">立即添加</el-button>
      <el-button>取消</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import qs from "qs";
export default {
  props: {
    url1: {
      type: String,
      default() {
        return "";
      }
    },
    url2: {
      type: String,
      default() {
        return "";
      }
    },
    url3: {
      type: String,
      default() {
        return "";
      }
    }
  },
  data() {
    return {
      dialogVisible: false,
      dialogImageUrl: "",
      disabled: false,
      id: null,
      start: "",
      sizeForm: {
        name: "",
        price: "",
        sku: ""
      }
    };
  },
  created() {
    this.start = this.$route.query.start;
    this.id = this.$route.query.id;
    window.console.log(this.$route.query);
    this.getData();
  },
  methods: {
    //根据id查询数据
    getData() {
      this.$axios
        .get(`http://localhost:1910${this.url1}/${this.id}`)
        .then(({ data }) => {
          this.sizeForm = { ...data[0] };
        });
    },
    //立即添加
    onSubmit() {
      this.$route.query.start == "update"
        ? this.updataGoods()
        : this.addGoods();
    },
    //添加数据
    addGoods() {
      this.$axios
        .post(
          `http://localhost:1910${this.url2}`,
          qs.stringify({
            name: this.sizeForm.name,
            price: this.sizeForm.price,
            sku: this.sizeForm.sku
          })
        )
        .then(data => {
          this.$router.go(-1);
          window.console.log(data);
        });
    },
    //修改数据
    updataGoods() {
      this.$axios
        .patch(
          `http://localhost:1910${this.url3}/${this.id}`,
          qs.stringify({
            name: this.sizeForm.name,
            price: this.sizeForm.price,
            sku: this.sizeForm.sku
          })
        )
        .then(data => {
          this.$router.go(-1);
          window.console.log(data);
        });
    },
    handleRemove(file) {
      console.log(file);
      1;
    },
    handlePictureCardPreview(file) {
      window.console.log(file);
      this.dialogImageUrl = file.url;
      window.console.log(this.dialogImageUrl);
      this.dialogVisible = true;
    },
    handleDownload(file) {
      console.log(file);
    }
  }
};
</script>
<style lang="scss" >
.fromData {
  .el-input__inner {
    width: 360px;
  }
}
</style>