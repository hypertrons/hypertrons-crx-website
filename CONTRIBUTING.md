# Working by Forking
Just head over to the GitHub page and click the "Fork" button. It's just that simple. Once you've done that, you can use your favorite git client to clone your repo or just head straight to the command line:

## Clone your fork to your local machine
```
git clone git@github.com:USERNAME/FORKED-PROJECT.git
```
Keeping Your Fork Up to Date
While this isn't an absolutely necessary step, if you plan on doing anything more than just a tiny quick fix, you'll want to make sure you keep your fork up to date by tracking the original "upstream" repo that you forked. To do this, you'll need to add a remote:

## Add 'upstream' repo to list of remotes
```
git remote add upstream https://github.com/hypertrons/hypercrx-website.git
``` 

## Verify the new remote named 'upstream'
```
git remote -v
```
Whenever you want to update your fork with the latest upstream changes, you'll need to first fetch the upstream repo's branches and latest commits to bring them into your repository:

## Fetch from upstream remote
```
git fetch upstream
```

## View all branches, including those from upstream
```
git branch -va
```
Now, checkout your own master branch and merge the upstream repo's master branch:

## Checkout your master branch and merge upstream
```
git checkout master
git merge upstream/master
```
If there are no unique commits on the local master branch, git will simply perform a fast-forward. However, if you have been making changes on master (in the vast majority of cases you probably shouldn't be - see the next section), you may have to deal with conflicts. When doing so, be careful to respect the changes made upstream.

Now, your local master branch is up-to-date with everything modified upstream.

**Create a Branch** (doing your work)
Whenever you begin work on a new feature or bugfix, it's important that you create a new branch. Not only is it proper git workflow, but it also keeps your changes organized and separated from the master branch so that you can easily submit and manage multiple pull requests for every task you complete.

To create a new branch and start working on it, perform the following flow.

## Checkout the master branch - you want your new branch to come from master
```
git checkout master
```

## Create a new branch (give your branch its own simple informative name)
For enhancements use `feature/your_username/issue#` or `feature/your_username/name_of_feature`

For bugs use `bug/your_username/issue#` or `bug/your_username/name_of_bug`

```
git branch feature/jdoe/567
```

## Switch to your new branch
```
git checkout feature/jdoe/567
```
Now, go to town hacking away and making whatever changes you want to.

## Submitting your changes (a Pull Request)
Prior to submitting your pull request, you might want to do a few things to clean up your branch and make it as simple as possible for the original repo's maintainer to test, accept, and merge your work.

In the time that you've been working on your changes, if any commits have been made to the upstream master branch, you will need to rebase your development branch so that merging it will be a simple fast-forward that won't require any conflict resolution work.

## Fetch upstream master and merge with your repo's master branch
```
git fetch upstream
git checkout master
git merge upstream/master
```

## If there were any new commits, rebase your development branch
```
git checkout feature/jdoe/567
git rebase master
```
Now, it may be desirable to squash some of your smaller commits down into a small number of larger more cohesive commits. You can do this with an interactive rebase:

## Rebase all commits on your development branch
```
git checkout
git rebase -i master
```
This will open up a text editor where you can specify which commits to squash.

## <a name="commit-signing">Signing-off on Commits (Developer Certificate of Origin)</a>

To contribute to this project, you must agree to the Developer Certificate of
Origin (DCO) for each commit you make. The DCO is a simple statement that you,
as a contributor, have the legal right to make the contribution.

See the [DCO](https://developercertificate.org) file for the full text of what you must agree to
and how it works [here](https://github.com/probot/dco#how-it-works).
To signify that you agree to the DCO for contributions, you simply add a line to each of your
git commit messages:

```
Signed-off-by: Jane Smith <jane.smith@example.com>
```

In most cases, you can add this signoff to your commit automatically with the
`-s` or `--signoff` flag to `git commit`. You must use your real name and a reachable email
address (sorry, no pseudonyms or anonymous contributions). An example of signing off on a commit:
```
$ commit -s -m “my commit message w/signoff”
```

To ensure all your commits are signed, you may choose to add this alias to your global ```.gitconfig```:

*~/.gitconfig*
```
[alias]
  amend = commit -s --amend
  cm = commit -s -m
  commit = commit -s
```

## Mermaid Diagrams
If you are adding a new Mermaid diagram, you can use the [getting-started](https://mermaid.js.org/intro/getting-started.html) documentation to get started. You can also use the [Mermaid Live Editor](https://mermaid-js.github.io/mermaid-live-editor/) to create and preview your diagrams.

## Submitting
Once you've committed and pushed all of your changes to GitHub, go to the page for your fork on GitHub, select your development branch, and click the pull request button. If you need to make any adjustments to your pull request, just push the updates to GitHub. Your pull request will automatically track the changes on your development branch and update.
