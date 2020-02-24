<template>
  <div class="food-add">
    <div class="iu-line">
        <van-field
          v-model="foodname"
          name="请输入要添加的食物名称"
          placeholder="请输入要添加的食物名称"
          label="名稱"
          type="text"
          class="food-input" 
        />
        <van-field
          v-model="originprice"
          label="原價"
          type="text"
          class="food-input" 
        />
    </div>
    <div class="food-rule">
      <div class="iu-line">
        <div class="line-label">規格</div>
        <div class="line-main">
          <div class="rule-set">
            <van-radio-group v-model="radio">
              <van-radio name="1">單規格</van-radio>
              <van-radio name="2">多規格</van-radio>
            </van-radio-group>
            <div class="food-rule-tips">注意：不填等于空（或者为0），每个分类必须有2～3个选择，否则无效；每个商品价格是所选的规格价格+原价 = 最终付款价格</div>
          </div>
          <div class="rule-input">
            <div class="editor-name">
              <van-field v-model="editorValue" placeholder="请输入規格名" class="food-input" /> 
            </div>
            <div class="editor-main">
              <div class="editor-set">
                <van-field v-model="value1name" placeholder="请输入選擇1" class="food-input" />
                <van-field v-model="value1price" placeholder="请輸入價格" class="food-input input-middle" />
                <van-field v-model="value1stock" placeholder="请输入庫存" class="food-input input-short" />
              </div>
              <div class="editor-set">
                <van-field v-model="value2name" placeholder="请输入選擇2" class="food-input" />
                <van-field v-model="value2price" placeholder="请輸入價格" class="food-input input-middle" />
                <van-field v-model="value2stock" placeholder="请输入庫存" class="food-input input-short" />
              </div>
              <van-button type="info" class="add"><van-icon name="plus" /></van-button>
            </div>
          </div>
          <div class="line-bottom">
            <van-button type="info" class="add">新增規格</van-button>
          </div>
        </div>
      </div>
      <div class="iu-line bottom">
        <div class="uploader">
          <div class="label">上傳照片</div>
          <van-uploader :after-read="afterRead" />
        </div>
        <div class="describe">
          <div class="label">簡約描述</div>
          <van-field
            v-model="message"
            rows="2"
            autosize
            type="textarea"
            maxlength="50"
            placeholder="请输入简约描述"
            show-word-limit
          />
        </div>
      </div>
    </div>
    <div class="iu-line add-bottom">
      <van-button type="primary" native-type="submit" >保存</van-button>
      <van-button type="info" to="/manage/food/list">取消</van-button>
    </div>
    <div class="languageset">
      <b>當前語言</b>
      <ul>
        <li v-for="(item , index) in languageSet" :key="index">
           <a>{{item}}</a>
        </li>
        <li><van-button type="primary">添加語言</van-button></li>
      </ul>
    </div>
  </div>
</template>

<script>

export default{
  data(){
    return{
      radio: '1',
      foodname: '',
      originprice: '',
      fileList: [
        {
          url: 'https://img.yzcdn.cn/vant/leaf.jpg',
          status: 'uploading',
          message: '上传中...'
        },
        {
          url: 'https://img.yzcdn.cn/vant/tree.jpg',
          status: 'failed',
          message: '上传失败'
        }
      ],
      editorValue: " ",
      value1name: '',
      value1price: '',
      value1stock: '',
      value2name: '',
      value2price: '',
      value2stock: '',
      message: '',
      languageSet: ['繁體中文', '日文', '英文' ]
    }
  },
  components: {

  },
  methods: {
    afterRead(file) {
      file.status = 'uploading';
      file.message = '上传中...';

      setTimeout(() => {
        file.status = 'failed';
        file.message = '上传失败';
      }, 1000);
    }
  }
}
</script>

<style lang="scss" scoped>
.food-add{
  background: #fff;
  padding: 15px;
  border-radius: 10px;
  position: relative;
  .iu-line{
    display: flex;
  }
  .line-label{
    padding-left: 15px;
    font-size: 18px;
    height: 50px;
    line-height: 50px;
    width: 90px;
  }
  .rule-set{
    display:flex;
  }
  .food-rule-tips{
    flex: 1;
    line-height: 20px;
    color: $iu-orange;
    font-size: 14px;
    margin-top: 7px;
    padding-right: 25px;
  }
  .van-radio-group{
    min-width: 150px;
    display: flex;
    height: 50px;
    .van-radio{
      margin-right: 15px;
    }
  }
  .line-main{
    padding-right: 15px;
  }
  .rule-input{
    display:flex;
    position: relative;
    border-bottom: 2px solid #ccc;
    padding-bottom: 12px;
    margin-bottom: 15px;
    .van-cell{
      padding-left: 0;
    }
    .editor-set{
      display:flex;
      padding-right: 80px;
      .input-middle{
        width: 260px;
      }
      .input-short{
        width: 260px;
      }
    }
    .add{
      position: absolute;
      min-width: 40px;
      right: 20px;
      bottom: 25px
    }
  }
  .bottom{
    margin-top: 30px;
    padding-left: 20px;
    display: flex;
  }
  .uploader,.describe{
    font-size: 18px;
    .label{margin-bottom: 10px}
  }
  .describe{
    flex: 1;
    margin-left: $iu-gap;
    .label{
      padding-left: 20px
    }
  }
  .add-bottom{
    justify-content: center;
    padding-top: 30px;
    padding-bottom: 30px;
    .van-button--primary{
      min-width: 200px;
      margin-right: 20px;
      }
  }
  .languageset{
    position: absolute;
    right: -130px;
    top: 10px;
    text-align: center;
    b{
      margin-bottom: 10px;
      display: block;
    }
    li a{
      background: #fff;
      display: block;
      margin-bottom: 15px;
      height: 50px;
      line-height: 50px;
      border-radius: 100px;
    }
  }
}

</style>
