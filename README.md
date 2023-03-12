
## 网址变化


```yaml
- name: Build and Deploy
        uses: jenkey2011/vuepress-deploy@v1.8.1
        env:
          ACCESS_TOKEN: ${{ secrets.ACCESS_TOKEN }}
          TARGET_REPO: withnosoul/vuepress-blog
          TARGET_BRANCH: gh_pages
          BUILD_SCRIPT: yarn && yarn build
          BUILD_DIR: docs/.vuepress/dist/
```

