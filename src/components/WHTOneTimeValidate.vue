<template>
<v-container class="fontAP">
<v-row justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
        <v-card ref="form">
        <h2 class="text-center darkBlue">หนังสือรับรองรายการหัก ณ ที่จ่าย <br>แบบ ภ.ง.ด.3</h2>
        <v-card-text>
            <v-text-field
            ref="name"
            v-model="name"
            label=""
            placeholder="ระบุหมายเลขบัตรประจำตัวประชาชน 13 หลัก"
            required
          ></v-text-field>
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <!-- <v-btn color="primary" text @click="submit" class="btn btn-custom-status">ตรวจสอบข้อมูล</v-btn> -->
          <v-btn @click="submit" class="btn btn-custom-status">ตรวจสอบข้อมูล</v-btn>
        </v-card-actions>
        </v-card>
    </v-col>
</v-row>
<v-row v-if="check" justify="center">
    <v-col cols="12" sm="10" md="8" lg="6">
        <v-data-table
        :headers="headers"
        :items="desserts"
        :items-per-page="5"
        class="elevation-1"
  ></v-data-table>
  <template v-slot:top>
      <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.name" label="Dessert name"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.calories" label="Calories"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.fat" label="Fat (g)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.carbs" label="Carbs (g)"></v-text-field>
                  </v-col>
                  <v-col cols="12" sm="6" md="4">
                    <v-text-field v-model="editedItem.protein" label="Protein (g)"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>
  </template>
    </v-col>
</v-row>
</v-container>
</template>

<script>
export default {
    name: 'WHTOneTImeValidate',
    data() {
        return {
            test: 'Hello World',
            name: null,
            check: false,
            headers: [{
                text: 'ประเภทรายการ',
                align: 'start',
                sortable: false,
                value: 'name',
                },
                { text: 'วันที่ หัก ณ ที่จ่าย', value: 'calories' },
                { text: 'ดาวน์โหลดเอกสาร', value: 'iron', sortable: false },
            ],
            desserts: [{
                name: 'รายการส่งเสริมการขาย FGF',
                calories: '30.03.2020',
                iron:  'ดาวน์โหลดที่นี่',
            }, 
            {
                name: 'รายการส่งเสริมการขาย FGF',
                calories: '12.04.2020',
                iron: 'ดาวน์โหลดที่นี่',
            }]
        };
    },
    computed: {
      form () {
        return {
          name: this.name
        };
      },
    },
    methods: {
        submit () {
            this.check = true;
            console.log('submit + ', this.name);
        }
    },
};
</script>

<style lang="scss" scoped>
.fontAP {
  font-family: 'AP';
}

.darkBlue {
    color: #00008b;
}

.btn {
    display: inline-block;
    font-weight: 600;
    font-size: 18px;
    font-family: 'AP';
    width: 100%;
    text-align: center;
    cursor: pointer;
    background-color: #666d78;
}

.btn-lg {
    font-size: 1rem;
}

.btn-custom-status {
    color: #ffffff;
    // background-color: #666d78;
    background-color: #666d78 !important;
    border-color: #666d78 !important;
    width: 100%;
    border-radius: .3rem;
}
</style>