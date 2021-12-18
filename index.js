module.exports = {
    "branches": [
        "main",
        {"name":  "alpha", "prerelease":  true}
    ],
    "ci": false,
    "plugins": [
        ["@semantic-release/commit-analyzer", {
            "preset":  "conventionalcommits",
            "releaseRules": [
                {"scope": "norelease", "release": false}
            ]
        }],
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        ["@semantic-release/exec", {
            "prepareCmd": "sed -i \"0,/version:.*/s//version: ${nextRelease.version}/g\" chart/Chart.yaml && helm dependency update chart && helm package chart && tar -czvf chart.tgz *.tgz"
        }],
        ["@semantic-release/git", {
            "assets": ["CHANGELOG.md", "chart/Chart.yaml"],
            "message": "semantic-release-bot chore(release): ${nextRelease.version} \n\n${nextRelease.notes}"
        }],
        ["@semantic-release/github", {
            "assets": [
                {"path": "chart.tgz", "label": "Helm chart"}
            ]
        }]
    ]
}