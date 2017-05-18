<template>
  <div>
    <el-row>
      <el-col :span="24">
        <header>
          <!-- navigation.html goes here -->
        </header>
      </el-col>
    </el-row><!-- /.row -->

    <el-row :gutter="10">
      <el-col :xs="24" :sm="24" :md="24" :lg="14">
        <div class="page-title">
          <div class="collection-header">
            <h1>The Harold Szeemann Collection, 1800-2011, bulk 1949-2005</h1><!-- Placeholder: Should be dynamic -->
            <h3>1958.93 Linear Feet (3812 boxes, 449 flatfiles, 6 crates, 3 bins, 24 reels)</h3><!-- Placeholder: Should be dynamic -->
          </div>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="24" :lg="10">
        <div class="collection-nav">
          <ul>
            <li><a href="#">Archive</a></li>
            <li><a href="#">About</a></li>
            <li><a href="#">Scope</a></li>
            <li><a href="#">Restrictions</a></li>
          </ul>
        </div>
      </el-col>
      <hr>
    </el-row><!-- /.row -->

    <el-row>
      <el-col :span="24">
        <h1>Item metadata title</h1><!-- Placeholder: Should be dynamic -->
      </el-col>
    </el-row><!-- /.row -->

    <el-row >
      <el-col :span="24">
        <div class="img-viewer" style="height: 800px;"><!-- Heigh attribute should be removed and done in CSS per the specs -->
      <!-- Mirador Image Viewer goes here -->
      <iframe title="Mirador" src="http://projectmirador.org/demo/" allowfullscreen="true" webkitallowfullscreen="true" mozallowfullscreen="true" height="100%" width="100%"></iframe>
        </div>
      </el-col>
    </el-row><!-- /.row -->

    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :md="24" :lg="8">
        <div class="collection-hierarchy">
          <h4>Location in Collection</h4>
          <hr>
          <ul><!-- Placeholder: This section should be dynamic based on each item -->
            <li class="coll-lvl-1">
              <div class="collection-title">
                <h4><a href="#">Harald Szeemann Collection</a></h4><!-- Placeholder: Should be dynamic -->
              </div>
              <div class="collection-metadata">
                <h5>Swiss art curator Harald Szeemann (1933-2005) organized more than 150 exhibitions during a career that spanned almost five decades. An advocate of contemporary movements such as conceptualis...</h5><a href="#">Read More</a><!-- Placeholder: Should be dynamic -->
              </div>
              <div class="carousel-thumbs">
                <!-- Digitized image carousel goes here if applicable -->
              </div>
            </li>
            <hr>
            <li class="coll-lvl-2">
              <div class="series-title">
                <h4><a href="#">Series III. Curator and museum professional files</a></h4><!-- Placeholder: Should be dynamic -->
              </div>
              <div class="collection-metadata">
                <h5>This subseries comprises the materials originally collected by Szeemann in large envelopes in the Work in Progress room of the Fabbrica, and constitutes the core and largest part of the series. Szeema...</h5><a href="#">Read More</a><!-- Placeholder: Should be dynamic -->
              </div>
              <div class="carousel-thumbs">
                <!-- Digitized image carousel goes here if applicable -->
              </div>
            </li>
            <hr>
            <li class="coll-lvl-3">
              <div class="series-title">
                <h4><a href="#">Series III.A. Curator files</a></h4><!-- Placeholder: Should be dynamic -->
              </div>
              <div class="collection-metadata">
                <h5>This subseries comprises the materials originally collected by Szeemann in large envelopes in the Work in Progress room of the Fabbrica, and constitutes the core and largest part of the series. Szeema...</h5><a href="#">Read More</a><!-- Placeholder: Should be dynamic -->
              </div>
              <div class="carousel-thumbs">
                <!-- Digitized image carousel goes here if applicable -->
              </div>
            </li>
          </ul>
        </div>
      </el-col>

      <el-col :xs="24" :sm="24" :md="24" :lg="16">
        <div class="item-metadata">
          <ul>
            <li>
              <h5 class="meta-label">Metadata Field Label</h5><!-- Placeholder: Should be dynamic -->
              <hr>
              <p class="meta-value">Includes records from the exhibition Blood & Honey: The Future lies in the Balkans. Box 2006B includes two paint cans from an exhibition curated by Badovinac.</p><!-- Placeholder: Should be dynamic -->
            </li>
          </ul>
        </div>
      </el-col>
    </el-row><!-- /.row -->
  </div>

</template>
