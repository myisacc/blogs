# 构建
vuepress build docs

# 导航到构建输出目录
cd docs/.vuepress/dist

git init
git add -A
git commit -m 'deploy'

# 如果发布到 https://<USERNAME>.github.io/<REPO>

git push -f git@github.com:myisacc/blog.git.icon.git

cd -