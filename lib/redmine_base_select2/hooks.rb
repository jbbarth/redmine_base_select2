module RedmineBaseSelect2
  class Hooks < Redmine::Hook::ViewListener
    def view_layouts_base_html_head(context)
      stylesheet_link_tag("select2", :plugin => "redmine_base_select2") +
        javascript_include_tag("select2.min.js", :plugin => "redmine_base_select2")
    end
  end
end
