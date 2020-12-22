class TitlesController < ApplicationController
  before_action :set_title, only: [:show, :update, :destroy]

  # GET /titles
  def index
    @titles = Title.all

    render json: @titles
  end

  def movie
    @movie = Title.where(program_type: "movies").order(:title).first(21)
    render json: @movie
  end

  def series
    @series = Title.where(program_type: "series").first(21)
    render json: @series
  end
  # GET /titles/1
  def show
    render json: @title
  end

  # POST /titles
  def create
    @title = Title.new(title_params)

    if @title.save
      render json: @title, status: :created, location: @title
    else
      render json: @title.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /titles/1
  def update
    if @title.update(title_params)
      render json: @title
    else
      render json: @title.errors, status: :unprocessable_entity
    end
  end

  # DELETE /titles/1
  def destroy
    @title.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_title
      @title = Title.find(params[:id])
    end

    # Only allow a trusted parameter "white list" through.
    def title_params
      params.fetch(:title, {})
    end
end
