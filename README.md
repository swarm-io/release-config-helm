# release-config-helm

This is a semantic-release configuration for helm chart repositories.

# What does it do?
This config leverages the `@semantic-release/exec` plugin to prepare the chart for release. It does the following:
1. Updates the `version` in Chart.yaml to the next release version
2. Runs `helm dependency update`
3. Runs `helm package chart`
4. compresses the packaged chart into `chart.tgz`

The `@semantic-release/github` plugin is configured to include the packaged `chart.tgz` file in the release assets

# Requirements
The chart must reside in the `chart` directory of the repo