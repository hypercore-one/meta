# Contributing to the Documentation

Thank you for your interest in contributing to the Hypercore.one Meta documentation! This guide will walk you through the process of proposing changes and submitting them for review.

## Prerequisites

Before you begin, make sure you have:
- A GitHub account
- Git installed on your local machine
- Node.js and npm installed (for testing changes locally)

## Step 1: Fork the Repository

1. Navigate to the [Hypercore.one Meta repository](https://github.com/hypercore-one/meta)
2. Click the **Fork** button in the upper right corner
3. This creates a copy of the repository under your GitHub account

## Step 2: Clone Your Fork

Clone your forked repository to your local machine:

```bash
git clone https://github.com/YOUR_USERNAME/meta.git
cd meta
```

## Step 3: Create a New Branch

Create a new branch for your changes:

```bash
git checkout -b feature/your-feature-name
```

Use descriptive branch names like:
- `docs/add-governance-guidelines`
- `fix/typo-in-principles`
- `feature/new-sig-charter`

## Step 4: Make Your Changes

### Adding New Documentation

1. Create your new markdown file in the appropriate directory:
   - Governance documents: `docs/governance/`
   - ADRs: `docs/adrs/`
   - SIG charters: `docs/sigs/`
   - General docs: `docs/`

2. Write your content using [Markdown syntax](/markdown)

### Updating Navigation

If you're adding a new page, you'll need to update the VitePress configuration:

1. Open `docs/.vitepress/config.mts`
2. Add your new page to the appropriate section:

```typescript
sidebar: [
  {
    text: 'Documentation',
    items: [
      { text: 'Your New Page', link: '/your-new-page' },
      // ... other items
    ]
  }
]
```

## Step 5: Test Your Changes Locally

Before submitting, test your changes locally:

```bash
npm install
npm run docs:dev
```

Visit `http://localhost:5173` to preview your changes.

## Step 6: Commit Your Changes

```bash
git add .
git commit -m "Add clear, descriptive commit message"
```

Good examples:
- `Add governance guidelines for proposal process`
- `Fix broken link in contributing guide`
- `Update SIG charter template with new sections`

## Step 7: Push to Your Fork

```bash
git push origin feature/your-feature-name
```

## Step 8: Create a Pull Request

1. Go to your fork on GitHub
2. Click **Pull requests** → **New pull request**
3. Ensure the base repository is `hypercore-one/meta` and base branch is `master`
4. Click **Create pull request**
5. Fill out the PR template:
   - **Title**: Clear description of changes
   - **Description**: Explain what you changed and why
   - **Related Issues**: Link any related issues with `#issue-number`

### PR Description Template

```markdown
## Summary
Brief description of what this PR does

## Changes
- Added X documentation
- Updated Y section
- Fixed Z issue

## Checklist
- [ ] Tested changes locally
- [ ] Updated config.mts if needed
- [ ] Checked for broken links
- [ ] Reviewed for typos and formatting
```

## Review Process

After submitting your PR:

1. Maintainers will review your changes
2. They may request modifications or clarifications
3. Make requested changes in your branch and push updates
4. Once approved, your PR will be merged

## Best Practices

### Content Guidelines

- **Be Clear and Concise**: Use simple language and avoid jargon
- **Use Examples**: Include practical examples where appropriate
- **Stay Consistent**: Follow existing formatting and style patterns
- **Add Context**: Explain the "why" not just the "what"

### Technical Guidelines

- **Check Links**: Ensure all links work correctly
- **Use Relative Paths**: For internal links, use relative paths
- **Optimize Images**: If adding images, keep file sizes reasonable
- **Test Locally**: Always preview your changes before submitting

### Common Issues to Avoid

- Don't commit `node_modules/` or build artifacts
- Don't modify unrelated files
- Don't include personal or sensitive information
- Don't make massive changes in a single PR - break them up

## Getting Help

If you need assistance:

- Check existing documentation for examples
- Open an issue for clarification
- Ask questions in your PR description
- Review recent merged PRs for patterns

## Thank You!

Your contributions help make Hypercore.one documentation better for everyone. We appreciate your time and effort in improving our community resources!