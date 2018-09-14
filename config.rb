http_path = "/"
css_dir = "dist/css"
sass_dir = "src/_sass"
environment = :production

output_style = (environment == :production) ? :compressed : :expanded

relative_assets = true


# To enable relative paths to assets via compass helper functions. Uncomment:
relative_assets = true

# To disable debugging comments that display the original location of your selectors. Uncomment:
line_comments = true