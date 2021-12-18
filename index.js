module.exports = {
    "branches": [
        "main"
    ],
    "ci": false,
    "plugins": [
        ["@semantic-release/exec", {
            "prepareCmd": "echo \"success\""
        }],
        ["@semantic-release/commit-analyzer", {
            "preset":  "conventionalcommits",
            "releaseRules": [
                {"scope": "norelease", "release": false}
            ]
        }],
        "@semantic-release/release-notes-generator",
        "@semantic-release/changelog",
        ["@semantic-release/git", {
            "assets": ["CHANGELOG.md"],
            "message": "semantic-release-bot chore(release): ${nextRelease.version} \n\n${nextRelease.notes}"
        }],
        "@semantic-release/github"
    ]
}
//