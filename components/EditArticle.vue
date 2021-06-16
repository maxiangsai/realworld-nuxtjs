<template>
  <div class="editor-page">
    <div class="container page">
      <div class="row">
        <div class="col-md-10 offset-md-1 col-xs-12">
          <form>
            <fieldset>
              <fieldset class="form-group">
                <input
                  v-model="form.title"
                  type="text"
                  class="form-control form-control-lg"
                  placeholder="Article Title"
                />
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="form.description"
                  type="text"
                  class="form-control"
                  placeholder="What's this article about?"
                />
              </fieldset>
              <fieldset class="form-group">
                <textarea
                  v-model="form.body"
                  class="form-control"
                  rows="8"
                  placeholder="Write your article (in markdown)"
                ></textarea>
              </fieldset>
              <fieldset class="form-group">
                <input
                  v-model="tag"
                  type="text"
                  class="form-control"
                  placeholder="Enter tags"
                  @keydown.enter="onEnter"
                />
                <div
                  v-for="(tag, index) in form.tagList"
                  :key="tag"
                  class="tag-list"
                >
                  <span class="tag-default tag-pill">
                    <i
                      class="ion-close-round"
                      @click="() => onClose(index)"
                    ></i>
                    {{ tag }}</span
                  >
                </div>
              </fieldset>
              <button
                class="btn btn-lg pull-xs-right btn-primary"
                type="button"
                @click="onPublish"
              >
                Publish Article
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'EditArticle',
  props: {
    model: {
      type: Object,
      default: () => ({ title: '', description: '', body: '', tagList: [] }),
    },
  },
  data() {
    return {
      form: this.model,
      tag: '',
    }
  },

  watch: {
    model(val) {
      this.form = val || {}
    },
  },

  methods: {
    onEnter() {
      if (!~this.form.tagList.indexOf(this.tag)) {
        this.form.tagList.push(this.tag)
      }
    },

    onPublish() {
      this.$emit('publish', this.form)
    },

    onClose(index) {
      this.form.tagList.splice(index, 1)
    },
  },
}
</script>
