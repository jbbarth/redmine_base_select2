require 'redmine'
require 'redmine_base_select2/hooks'

Redmine::Plugin.register :redmine_base_select2 do
  name 'Redmine Select2 plugin'
  description 'This plugin adds the Select2 component to your Redmine instance'
  author 'Jean-Baptiste BARTH'
  author_url 'mailto:jeanbaptiste.barth@gmail.com'
  version '4.0.0'
  url 'https://github.com/jbbarth/redmine_base_select2'
  requires_redmine :version_or_higher => '2.1.0'
end
