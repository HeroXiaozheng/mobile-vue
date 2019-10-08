<template>
    <div>
        <cube-form>
            <cube-form-group>
                <cube-form-item>
                    <cube-radio-group
                        v-model="radioOption.value"
                        :options="radioOption" />
                    <cube-input
                        v-model="inputValue"
                        placeholder="input here">
                    </cube-input>
                </cube-form-item>
                <cube-form-item>
                    <cube-textarea
                        v-model="textValue"
                        :maxlength="100"
                        :auto-expand="true">
                    </cube-textarea>
                </cube-form-item>
                <cube-form-item>
                    <cube-button
                        type="submit"
                        @click="submit">
                        提交
                    </cube-button>
                </cube-form-item>
            </cube-form-group>
        </cube-form>
    </div>
</template>

<script>
export default {
    data () {
        return {
            checked: '2',
            inputValue: '',
            textValue: '',
            selectValue: [{
                text: '星期一',
                value: '1'
            }, {
                text: '星期二',
                value: '2'
            }, {
                text: '星期三',
                value: '3'
            }, {
                text: '星期四',
                value: '4'
            }],
            title: '入职时间',
            radioOption: [{
                label: 'option1',
                text: '2'
            }, {
                label: 'option2',
                value: '3'
            }]
        }
    },
    methods: {
        showTips () {
            if (this.checked) {
                this.$refs.tips.show();
            } else {
                this.$refs.tips.hide();
            }
        },
        showInputValue () {
            console.log(this.inputValue)
        },
        showValue () {
            console.log(this.selectValue.value)
        },
        submit () {
            console.log(this)
        }
    }
}
</script>

<style>

</style>