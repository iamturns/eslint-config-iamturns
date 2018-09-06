# Contributing

## Setup

```bash
npm run setup
```

Speeding up Pull Requests workflow with [git-reflow](https://github.com/reenhanced/gitreflow).

```bash
gem install git_reflow
git reflow setup
```

## Develop

```bash
git reflow start feature-name

# Refresh with base branch (usually master)
git reflow refresh

# Submit Pull Request
# First line is title, remaining is body
git reflow review

## Check PR status
git reflow status
```

## Deliver

```bash
git reflow deliver
```

Ensure commit messages in `master` conform to [Conventional Commits](https://conventionalcommits.org/) spec.
